import { useState, useEffect, useRef } from "react";
import { MENU_LIST } from "@/common/menuData";
import { Link, useLocation } from "react-router-dom";
import "./TopNavi.css";

const SUB_PATHS = ["/about", "/customer", "/sitemap"];

const TopNavi = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileIdx, setOpenMobileIdx] = useState(null); // ✅ 추가
  const [openMobileSubIdx, setOpenMobileSubIdx] = useState(null);

  const lastScrollY = useRef(0);
  // const [isTop, setIsTop] = useState(() => window.scrollY === 0);
  // const [hidden, setHidden] = useState(false);
  const { pathname } = useLocation();
  //const isSub = SUB_PATHS.some((path) => pathname.startsWith(path));

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentY = window.scrollY;
  //     if (currentY > lastScrollY.current && currentY > 80) {
  //       setHidden(true);
  //     } else {
  //       setHidden(false);
  //     }
  //     setIsTop(currentY === 0);
  //     lastScrollY.current = currentY;
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    lastScrollY.current = 0;
    setTimeout(() => setMobileOpen(false), 0);
  }, [pathname]);

  // 모바일 열릴때 스크롤 막음
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* <nav className={`gnb-wrapper ${isSub ? "gnb-sub" : ""} ${hidden ? "gnb-hidden" : ""} ${!isTop ? "gnb-scrolled" : ""}`}> */}
      <nav
        className={`gnb-wrapper ${activeMenu !== null ? "on" : ""}`}
        onMouseLeave={() => {
          setActiveMenu(null);
          setActiveSubMenu(null);
        }}
      >
        <div className="gnb-container inner">
          <Link to="/" className="logo">
            <img src="/images/logo.png" alt="로고" className="th-dark" />
            <img src="/images/logo_wh.png" alt="로고" className="th-light" />
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
                <Link to={menu.defaultPath ?? menu.path}>{menu.title}</Link>

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
                        <Link to={sub.defaultPath ?? sub.path}>
                          {sub.title}
                          <span className="arrow">›</span>
                        </Link>
                        {sub.subMenu?.length > 0 && (
                          <div
                            className={`sub-sub-menu-pane ${activeSubMenu === `${idx}-${sIdx}` ? "show" : ""}`}
                          >
                            <ul className="sub-sub-menu">
                              {sub.subMenu.map((subSub, ssIdx) => (
                                <li key={ssIdx}>
                                  <Link to={subSub.path}>{subSub.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>

          <div className="gnb-utils">
            <Link to="/sitemap" className="sitemap-btn">
              <img
                src="/images/menu_dark.svg"
                alt="사이트맵 바로가기"
                className="th-dark"
              />
              <img
                src="/images/menu_white.svg"
                alt="사이트맵 바로가기"
                className="th-light"
              />
            </Link>
            <button
              className="open-menu-btn"
              onClick={() => setMobileOpen(true)}
            >
              <img
                src="/images/menu_dark.svg"
                alt="메뉴 열기"
                className="th-dark"
              />
              <img
                src="/images/menu_white.svg"
                alt="메뉴 열기"
                className="th-light"
              />
            </button>
          </div>
        </div>

        {/* <div
          className={`gnb-bg ${activeMenu !== null ? "show" : ""}`}
          onMouseLeave={() => setActiveMenu(null)}
        /> */}
      </nav>

      {/* 모바일 메뉴 .. */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="logo" onClick={() => setMobileOpen(false)}>
            <img src="/images/logo.png" alt="로고" />
          </Link>
          <button
            className="mobile-close-btn"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>
        </div>
        <ul className="mobile-menu-list">
          {MENU_LIST.map((menu, idx) => (
            <li key={idx} className="mobile-menu-item">
              <button
                className="mobile-parent"
                onClick={() => {
                  setOpenMobileIdx(openMobileIdx === idx ? null : idx);
                  setOpenMobileSubIdx(null);
                }}
              >
                {menu.title}
                <span>{openMobileIdx === idx ? "-" : "+"}</span>
              </button>

              {openMobileIdx === idx && menu.subMenu?.length > 0 && (
                <ul className="mobile-sub-list">
                  {menu.subMenu.map((sub, sIdx) => (
                    <li key={sIdx}>
                      {/* 2depth - 3depth 있으면 토글, 없으면 링크 */}
                      {sub.subMenu?.length > 0 ? (
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
                          {sub.title}
                          <span>
                            {openMobileSubIdx === `${idx}-${sIdx}` ? "-" : "+"}
                          </span>
                        </button>
                      ) : (
                        <Link
                          to={sub.path}
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.title}
                        </Link>
                      )}

                      {sub.subMenu?.length > 0 &&
                        openMobileSubIdx === `${idx}-${sIdx}` && (
                          <ul className="mobile-sub-sub-list">
                            {sub.subMenu.map((subSub, ssIdx) => (
                              <li key={ssIdx}>
                                <Link
                                  to={subSub.path}
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {subSub.title}
                                </Link>
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
