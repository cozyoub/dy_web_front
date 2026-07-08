import "./App.css";
import "@/assets/css/reset.css";
import "@/assets/css/global.css";
import { Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { MENU_LIST } from "@/common/menuData";
import TopNavi from "./components/TopNavi";
import Login from "./pages/Login";
import SubLayout from "./layouts/SubLayout";
import AdminLayout from "./layouts/AdminLayout";
import Admin from "./pages/Admin";
import PrivateRoute from "./routes/PrivateRoute";
/* 관리자 페이지*/
import AdminNoticeList from "./pages/Admin/Notice/AdminNoticeList";
import AdminNoticeWrite from "./pages/Admin/Notice/AdminNoticeWrite";
import AdminContactList from "./pages/Admin/contact/AdminContactList";
import AdminNoticeEdit from "./pages/Admin/Notice/AdminNoticeEdit";
import NoticeList from "./pages/sub/about/NoticeList";
import NoticeDetail from "./pages/sub/about/NoticeDetail";
import QnA from "./pages/sub/customer/QnA";
import MainLayout from "./layouts/MainLayout";
import AdminPopupList from "./pages/Admin/popup/AdminPopupList";
import AdminPopupWrite from "./pages/Admin/popup/AdminPopupWrite";
import AdminPopupEdit from "./pages/Admin/popup/AdminPopupEdit";
import Sitemap from "./pages/sub/Sitemap";
import DemoScrollEx from "./pages/sub/customer/DemoScroll";
import Float from "./components/Float";
import Footer from "./components/Footer";
import Contact from "./pages/sub/Contact";
import AdminWebzineList from "./pages/Admin/webzine/AdminWebzineList";
import AdminWebzineWrite from "./pages/Admin/webzine/AdminWebzineWrite";
import AdminWebzineEdit from "./pages/Admin/webzine/AdminWebzineEdit";
import WebzineDetail from "./pages/sub/about/WebzineDetail";

const extractRoutes = (menuList) => {
  const routes = [];
  const traverse = (items) => {
    items.forEach((item) => {
      if (item.component) {
        const Component = item.component;
        routes.push({ path: item.path, element: <Component /> });
      }
      if (item.subMenu?.length) traverse(item.subMenu);
    });
  };
  traverse(menuList);
  return routes;
};

const subRoutes = extractRoutes(MENU_LIST);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <>
                <TopNavi />
                <Float />
                <Outlet />
                <Footer />
              </>
            }
          >
            <Route path="/" element={<MainLayout />} />
            {/* SubLayout*/}
            <Route element={<SubLayout />}>
              {subRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              <Route path="/customer/qna" element={<QnA />} />
              <Route path="/about/notice" element={<NoticeList />} />
              <Route path="/about/notice/:id" element={<NoticeDetail />} />
              <Route path="/about/webzine/:id" element={<WebzineDetail />} />
              <Route path="/customer/animation" element={<DemoScrollEx />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sitemap" element={<Sitemap />} />
            </Route>
          </Route>

          {/* Admin 페이지 */}
          <Route path="/admin-login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Admin />} />
            {/* 공지사항 관리 */}
            <Route path="notice/list" element={<AdminNoticeList />} />
            <Route path="notice/write" element={<AdminNoticeWrite />} />
            <Route path="notice/edit/:id" element={<AdminNoticeEdit />} />
            {/* 문의하기 관리 */}
            <Route path="contact/list" element={<AdminContactList />} />
            {/* 팝업 관리 */}
            <Route path="popup/list" element={<AdminPopupList />} />
            <Route path="popup/write" element={<AdminPopupWrite />} />
            <Route path="popup/edit/:id" element={<AdminPopupEdit />} />
            {/* 웹진 관리 */}
            <Route path="webzine/list" element={<AdminWebzineList />} />
            <Route path="webzine/write" element={<AdminWebzineWrite />} />
            <Route path="webzine/edit/:id" element={<AdminWebzineEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
