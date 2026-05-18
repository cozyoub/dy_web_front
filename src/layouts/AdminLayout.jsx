import AdminTopNavi from "@/components/AdminNavi";
import "./AdminLayout.css";
import { Outlet } from "react-router-dom";
import "@/assets/css/admin.css";

export default function AdminLayout() {
  return (
    <div className="admin-layout-wrapper">
      <AdminTopNavi />
      <main className="admin-main-container">
        <div className="admin-content-card">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
