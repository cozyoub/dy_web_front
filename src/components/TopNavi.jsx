import { useState, useEffect, useRef } from "react";
import { MENU_LIST } from "@/common/menuData";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import LangLink from "@/components/LangLink";
import "./TopNavi.css";

const SUB_PATHS = ["/about", "/customer", "/sitemap"];

const TopNavi = ({ revealed = true }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileIdx, setOpenMobileIdx] = useState(null);
  const [openMobileSubIdx, setOpenMobileSubIdx] = useState(null);
  const [langOpen, setLangOpen] = useState(false);

  const lastScrollY = useRef(0);
  const { pathname } = useLocation();
  const { lang, getPathForLang } = useLanguage();
  const { t, menuTitle } = useTranslation();
  const langRef = useRef(null);

  const [isTop, setIsTop] = useState(() => window.scrollY === 0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setIsTop(currentY === 0);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    lastScrollY.current = 0;
    setTimeout(() => setMobileOpen(false), 0);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // 언어 드롭다운 바깥 클릭 시 닫기
  useEffect(() => {
    if (!langOpen) return;
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langOpen]);

  return (
    <>
      <nav
        className={`gnb-wrapper ${activeMenu !== null ? "on" : ""} ${hidden ? "gnb-hidden" : ""} ${!isTop ? "gnb-scrolled" : ""} `}
        onMouseLeave={() => {
          setActiveMenu(null);
          setActiveSubMenu(null);
        }}
      >
        <div className="gnb-container inner">
          <Link to={lang === "en" ? "/en" : "/"} className="logo">
            <img
              src="/images/common/logo.svg"
              alt={t.ui.logoAlt}
              className="th-dark"
            />
            <img
              src="/images/common/logo_wh.svg"
              alt={t.ui.logoAlt}
              className="th-light"
            />
          </Link>

          <ul className="main-menu">
            {MENU_LIST.map((menu, idx) => (
              <li
                key={idx}
                className={`menu-item ${activeMenu === idx ? "active" : ""}`}
                onMouseEnter={() => {
                  setActiveMenu(idx);
                  setActiveSubMenu(null);
                }}
              >
                <LangLink to={menu.defaultPath ?? menu.path}>
                  {menuTitle(menu)}
                </LangLink>

                {menu.subMenu?.length > 0 && (
                  <div
                    className={`sub-menu-pane ${activeMenu === idx ? "show" : ""}`}
                  >
                    <ul className="sub-menu">
                      {menu.subMenu.map((sub, sIdx) => (
                        <li
                          key={sIdx}
                          className={`sub-menu-item ${activeSubMenu === `${idx}-${sIdx}` ? "active" : ""}`}
                          onMouseEnter={() =>
                            sub.subMenu?.length &&
                            setActiveSubMenu(`${idx}-${sIdx}`)
                          }
                          onMouseLeave={() => setActiveSubMenu(null)}
                        >
                          {sub.externalLink ? (
                            
                              <a href={sub.externalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {menuTitle(sub)}
                              <span className="arrow">›</span>
                            </a>
                          ) : (
                            <LangLink to={sub.defaultPath ?? sub.path}>
                              {menuTitle(sub)}
                              <span className="arrow">›</span>
                            </LangLink>
                          )}
                          {sub.subMenu?.length > 0 && (
                            <div
                              className={`sub-sub-menu-pane ${activeSubMenu === `${idx}-${sIdx}` ? "show" : ""}`}
                            >
                              <ul className="sub-sub-menu">
                                {sub.subMenu.map((subSub, ssIdx) => (
                                  <li key={ssIdx}>
                                    <LangLink to={subSub.path}>
                                      {menuTitle(subSub)}
                                    </LangLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="gnb-utils">
            <div className="lang-switch" ref={langRef}>
              <button
                className="lang-switch-btn"
                onClick={() => setLangOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={langOpen}
              >
                <img
                  src="/images/common/lang_dark.svg"
                  alt={t.ui.selectLanguage}
                  className="th-dark"
                />
                <img
                  src="/images/common/lang_white.svg"
                  alt={t.ui.selectLanguage}
                  className="th-light"
                />
                {/* <span className="lang-switch-label">{lang.toUpperCase()}</span> */}
              </button>

              {langOpen && (
                <ul className="lang-dropdown">
                  <li className={lang === "ko" ? "active" : ""}>
                    <Link to={getPathForLang("ko")} onClick={() => setLangOpen(false)}>
                      KO
                    </Link>
                  </li>
                  <li className={lang === "en" ? "active" : ""}>
                    <Link to={getPathForLang("en")} onClick={() => setLangOpen(false)}>
                      EN
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            <LangLink to="/sitemap" className="sitemap-btn">
              <img
                src="/images/common/menu_dark.svg"
                alt={t.ui.goToSitemap}
                className="th-dark"
              />
              <img
                src="/images/common/menu_white.svg"
                alt={t.ui.goToSitemap}
                className="th-light"
              />
            </LangLink>
            <button
              className="open-menu-btn"
              onClick={() => setMobileOpen(true)}
            >
              <img
                src="/images/common/menu_dark.svg"
                alt={t.ui.openMenu}
                className="th-dark"
              />
              <img
                src="/images/common//menu_white.svg"
                alt={t.ui.openMenu}
                className="th-light"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* 모바일 메뉴 .. */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <Link to={lang === "en" ? "/en" : "/"} className="logo" onClick={() => setMobileOpen(false)}>
            <img src="/images/common/logo.svg" alt={t.ui.logoAlt} />
          </Link>
          <button
            className="mobile-close-btn"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* 모바일 언어 전환 */}
        <div className="mobile-lang-switch">
          <Link
            to={getPathForLang("ko")}
            className={lang === "ko" ? "active" : ""}
            onClick={() => setMobileOpen(false)}
          >
            KO
          </Link>
          <span className="divider">/</span>
          <Link
            to={getPathForLang("en")}
            className={lang === "en" ? "active" : ""}
            onClick={() => setMobileOpen(false)}
          >
            EN
          </Link>
        </div>

        <ul className="mobile-menu-list">
          {MENU_LIST.map((menu, idx) => (
            <li key={idx} className="mobile-menu-item">
              {menu.subMenu?.length > 0 ? (
                <button
                  className="mobile-parent"
                  onClick={() => {
                    setOpenMobileIdx(openMobileIdx === idx ? null : idx);
                    setOpenMobileSubIdx(null);
                  }}
                >
                  {menuTitle(menu)}
                  <span>{openMobileIdx === idx ? "-" : "+"}</span>
                </button>
              ) : (
                <LangLink
                  to={menu.defaultPath ?? menu.path}
                  className="mobile-parent"
                  onClick={() => setMobileOpen(false)}
                >
                  {menuTitle(menu)}
                </LangLink>
              )}

              {openMobileIdx === idx && menu.subMenu?.length > 0 && (
                <ul className="mobile-sub-list">
                  {menu.subMenu.map((sub, sIdx) => (
                    <li key={sIdx}>
                      {sub.externalLink ? (
                        
                          <a href={sub.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileOpen(false)}
                        >
                          {menuTitle(sub)}
                        </a>
                      ) : sub.subMenu?.length > 0 ? (
                        <button
                          className="mobile-sub-btn"
                          onClick={() =>
                            setOpenMobileSubIdx(
                              openMobileSubIdx === `${idx}-${sIdx}`
                                ? null
                                : `${idx}-${sIdx}`,
                            )
                          }
                        >
                          {menuTitle(sub)}
                          <span>
                            {openMobileSubIdx === `${idx}-${sIdx}` ? "-" : "+"}
                          </span>
                        </button>
                      ) : (
                        <LangLink
                          to={sub.path}
                          onClick={() => setMobileOpen(false)}
                        >
                          {menuTitle(sub)}
                        </LangLink>
                      )}

                      {sub.subMenu?.length > 0 &&
                        openMobileSubIdx === `${idx}-${sIdx}` && (
                          <ul className="mobile-sub-sub-list">
                            {sub.subMenu.map((subSub, ssIdx) => (
                              <li key={ssIdx}>
                                <LangLink
                                  to={subSub.path}
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {menuTitle(subSub)}
                                </LangLink>
                              </li>
                            ))}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />
      )}
    </>
  );
};

export default TopNavi;