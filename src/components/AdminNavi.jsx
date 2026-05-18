import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ADMIN_MENU_LIST } from "@/common/menuData";
import "./AdminNavi.css";
import useUserStore from "@/store/useUserStore";

const AdminTopNavi = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const setCurrentUser = useUserStore((state) => state.setCurrentUser);
  const [openIdx, setOpenIdx] = useState(() => {
    return ADMIN_MENU_LIST.findIndex((menu) => pathname.startsWith(menu.path));
  });

  const handleLogout = () => {
    navigate("/admin-login");
    localStorage.removeItem("token");
    setCurrentUser(null);
    alert("로그아웃 되었습니다.");
  };

  const handleToggle = (idx) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <nav className="admin-sidebar">
      <Link to="/admin" className="admin-logo">
        <img src="/images/logo.png" alt="" />
        <span>관리자 페이지</span>
      </Link>

      <ul className="admin-main-menu">
        {ADMIN_MENU_LIST.map((menu, idx) => (
          <li
            key={idx}
            className={`admin-menu-item ${openIdx === idx ? "open" : ""}`}
          >
            <button
              className={`admin-menu-btn ${pathname.startsWith(menu.path) ? "active" : ""}`}
              onClick={() => handleToggle(idx)}
            >
              <span>{menu.title}</span>
              <span className="admin-menu-arrow">
                {openIdx === idx ? "▼" : "▶"}
              </span>
            </button>

            {openIdx === idx && (
              <ul className="admin-sub-menu">
                {menu.subMenu.map((sub, sIdx) => (
                  <li key={sIdx}>
                    <Link
                      to={sub.path}
                      className={pathname === sub.path ? "active" : ""}
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <button className="admin-logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default AdminTopNavi;
