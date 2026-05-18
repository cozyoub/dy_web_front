// components/SubNavi.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { forwardRef } from "react";
import { MENU_LIST } from "@/common/menuData";
import "./SubNavi.css";

const MenuItem = ({ item, depth = 0 }) => {
  const { pathname } = useLocation();
  const hasChildren = item.subMenu?.length > 0;
  const isActive = pathname.startsWith(item.path);
  const [isOpen, setIsOpen] = useState(isActive);

  return (
    <li className={`depth-${depth} ${isActive ? "active" : ""}`}>
      <div onClick={() => hasChildren && setIsOpen(!isOpen)}>
        {hasChildren ? (
          <span>
            {item.title} {isOpen ? "▲" : "▼"}
          </span>
        ) : (
          <Link to={item.defaultPath ?? item.path}>{item.title}</Link>
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
  const [openIdx, setOpenIdx] = useState(null);

  // 현재 경로 1depth
  const activeMenu = MENU_LIST.find(
    (menu) =>
      pathname.startsWith(menu.path) || 
      menu.subMenu?.some((sub) => pathname.startsWith(sub.path)), 
  );
  // 현재 경로 2depth
  const activeSubMenu = activeMenu?.subMenu?.find((sub) =>
    pathname.startsWith(sub.path),
  );
  // 현재 경로 3depth
  const activeSubSubMenu = activeSubMenu?.subMenu?.find((sub) =>
    pathname.startsWith(sub.path),
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
                {current.title}
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
                  const isActive = pathname.startsWith(item.path);
                  return (
                    <li key={idx}>
                      <Link
                        to={item.defaultPath ?? item.path}
                        style={{ color: isActive ? "#fff" : "#fff" }}
                        onClick={() => setOpenIdx(null)}
                      >
                        {item.title}
                      </Link>
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
