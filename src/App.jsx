import "./App.css";
import "@/assets/css/reset.css";
import "@/assets/css/global.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { MENU_LIST } from "@/common/menuData";
import TopNavi from "./components/TopNavi";
import Login from "./pages/Login";
import SubLayout from "./layouts/SubLayout";
import AdminLayout from "./layouts/AdminLayout";
import Admin from "./pages/Admin";
import PrivateRoute from "./routes/PrivateRoute";
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
import useSolutionTitleAnimation from "@/hooks/useSolutionTitleAnimation";
import PopupViewer from "./components/PopupViewer";
import { LanguageProvider } from "@/contexts/LanguageContext";

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

function RootLayout() {
  useSolutionTitleAnimation();

  return (
    <>
      <TopNavi />
      <Float />
      <PopupViewer />
      <Outlet />
      <Footer />
    </>
  );
}

// prefix("")  -> 국문 라우트 그대로
// prefix("/en") -> 영문 라우트 (동일 컴포넌트 재사용, 경로만 /en/... 로)
function withPrefix(prefix, path) {
  if (!prefix) return path;
  return path === "/" ? prefix : `${prefix}${path}`;
}

function renderPublicRoutes(prefix = "") {
  const p = (path) => withPrefix(prefix, path);

  return (
    <Route element={<RootLayout />}>
      <Route path={p("/")} element={<MainLayout />} />

      {/* SubLayout */}
      <Route element={<SubLayout />}>
        {subRoutes.map(({ path, element }) => (
          <Route key={p(path)} path={p(path)} element={element} />
        ))}
        <Route path={p("/customer/qna")} element={<QnA />} />
        <Route path={p("/about/notice")} element={<NoticeList />} />
        <Route path={p("/about/notice/:id")} element={<NoticeDetail />} />
        <Route path={p("/about/webzine/:id")} element={<WebzineDetail />} />
        <Route path={p("/customer/animation")} element={<DemoScrollEx />} />
        <Route path={p("/contact")} element={<Contact />} />
        <Route path={p("/sitemap")} element={<Sitemap />} />
      </Route>
    </Route>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          {/* 국문 (기본) */}
          {renderPublicRoutes("")}

          {/* 영문 */}
          {renderPublicRoutes("/en")}

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
            <Route path="notice/list" element={<AdminNoticeList />} />
            <Route path="notice/write" element={<AdminNoticeWrite />} />
            <Route path="notice/edit/:id" element={<AdminNoticeEdit />} />
            <Route path="contact/list" element={<AdminContactList />} />
            <Route path="popup/list" element={<AdminPopupList />} />
            <Route path="popup/write" element={<AdminPopupWrite />} />
            <Route path="popup/edit/:id" element={<AdminPopupEdit />} />
            <Route path="webzine/list" element={<AdminWebzineList />} />
            <Route path="webzine/write" element={<AdminWebzineWrite />} />
            <Route path="webzine/edit/:id" element={<AdminWebzineEdit />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;