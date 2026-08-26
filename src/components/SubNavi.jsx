// components/SubNavi.jsx
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { forwardRef } from "react";
import { MENU_LIST } from "@/common/menuData";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import LangLink from "@/components/LangLink";
import "./SubNavi.css";

const MenuItem = ({ item, depth = 0 }) => {
  const { pathname } = useLocation();
  const { lang } = useLanguage();
  const { menuTitle } = useTranslation();
  const matchPath = lang === "en" ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const hasChildren = item.subMenu?.length > 0;
  const isActive = matchPath.startsWith(item.path);
  const [isOpen, setIsOpen] = useState(isActive);

  return (
    <li className={`depth-${depth} ${isActive ? "active" : ""}`}>
      <div onClick={() => hasChildren && setIsOpen(!isOpen)}>
        {hasChildren ? (
          <span>
            {menuTitle(item)} {isOpen ? "▲" : "▼"}
          </span>
        ) : (
          <LangLink to={item.defaultPath ?? item.path}>{menuTitle(item)}</LangLink>
        )}
      </div>
      {hasChildren && isOpen && (
        <ul>
          {item.subMenu.map((child, idx) => (
            <MenuItem key={idx} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const SubNavi = forwardRef((props, ref) => {
  const { pathname } = useLocation();
  const { lang } = useLanguage();
  const { menuTitle } = useTranslation();
  const [openIdx, setOpenIdx] = useState(null);

  // /en 접두어를 떼어낸 경로로 메뉴 데이터와 매칭한다 (메뉴 경로엔 /en이 없으므로).
  const matchPath = lang === "en" ? pathname.replace(/^\/en/, "") || "/" : pathname;

  // 현재 경로 1depth
  const activeMenu = MENU_LIST.find(
    (menu) =>
      matchPath.startsWith(menu.path) ||
      menu.subMenu?.some((sub) => matchPath.startsWith(sub.path)),
  );
  // 현재 경로 2depth
  const activeSubMenu = activeMenu?.subMenu?.find((sub) =>
    matchPath.startsWith(sub.path),
  );
  // 현재 경로 3depth
  const activeSubSubMenu = activeSubMenu?.subMenu?.find((sub) =>
    matchPath.startsWith(sub.path),
  );

  const breadcrumb = [activeMenu, activeSubMenu, activeSubSubMenu].filter(
    Boolean,
  );

  return (
    <div className="sub-select-container" ref={ref}>
      <div className="sub-select-wrap">
        {breadcrumb.map((current, bIdx) => {
          const isOpen = openIdx === bIdx;

          const listItems =
            bIdx === 0
              ? MENU_LIST
              : bIdx === 1
                ? activeMenu?.subMenu
                : activeSubMenu?.subMenu;

          return (
            <div key={bIdx} className="select-box">
              <button
                type="button"
                className={`select-btn ${isOpen ? "active" : ""}`}
                onClick={() => setOpenIdx(isOpen ? null : bIdx)}
              >
                {menuTitle(current)}
              </button>
              <ul
                className="select-list"
                style={{
                  maxHeight: isOpen ? "500px" : "0px",
                  visibility: isOpen ? "visible" : "hidden",
                  transition: "max-height 0.3s ease, visibility 0.3s ease",
                }}
              >
                {listItems?.map((item, idx) => {
                  const isActive = matchPath.startsWith(item.path);
                  return (
                    <li key={idx}>
                      <LangLink
                        to={item.defaultPath ?? item.path}
                        style={{ color: isActive ? "#fff" : "#fff" }}
                        onClick={() => setOpenIdx(null)}
                      >
                        {menuTitle(item)}
                      </LangLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
});
export default SubNavi;
