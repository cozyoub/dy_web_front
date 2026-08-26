import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./SubLayout.css";
import "@/assets/css/sub.css";
import SubNavi from "@/components/SubNavi";
import { MENU_LIST } from "@/common/menuData";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const DEPTH1_VISUAL = {
  "/business":    "/images/sub/visual-about.jpg",
  "/service":  "/images/sub/visual-service.jpg",
  "/solution": "/images/sub/visual-solution.jpg",
  "/industry": "/images/sub/visual-industry.jpg",
  "/insight":  "/images/sub/visual-insight.jpg",
  "/about":    "/images/sub/visual-about.jpg",
  "/customer": "/images/sub/visual-customer.jpg",
};

const SPECIAL_PAGES = {
  "/sitemap": { title: "사이트맵", titleEn: "Sitemap", subtitle: "Sitemap", bg: "/images/sub/visual-service.jpg" },
  "/contact": { title: "Contact", titleEn: "Contact", subtitle: "Contact Us", bg: "/images/sub/visual-service.jpg" },
};

const findMenuTitle = (menus, pathname) => {
  for (const menu of menus) {
    if (menu.subMenu) {
      const found = findMenuTitle(menu.subMenu, pathname);
      if (found) return found;
    }
    if (menu.path && (pathname === menu.path || pathname.startsWith(menu.path + "/"))) {
      return menu.title;
    }
  }
  return null;
};

export default function SubLayout() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();
  const { t } = useTranslation();
  const bgRef       = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef    = useRef(null);
  const naviRef     = useRef(null);

  // /en 접두어를 떼어낸 경로로 메뉴 데이터와 매칭한다 (메뉴 경로엔 /en이 없으므로).
  const matchPath = lang === "en" ? pathname.replace(/^\/en/, "") || "/" : pathname;

  const isSpecial = SPECIAL_PAGES[matchPath];
  const depth1    = MENU_LIST.find(m => matchPath.startsWith(m.path));

  const rawTitle = findMenuTitle(MENU_LIST, matchPath);
  const translatedTitle = rawTitle && (t.menu?.[matchPath] ?? rawTitle);

  const subtitle = isSpecial?.subtitle ?? depth1?.title ?? "";
  const title    = (isSpecial && (lang === "en" ? isSpecial.titleEn : isSpecial.title)) ?? translatedTitle ?? subtitle;
  const bg       = isSpecial?.bg ?? DEPTH1_VISUAL[depth1?.path] ?? "";

  useEffect(() => {
    if (!bgRef.current || !subtitleRef.current || !titleRef.current) return;

    const tl = gsap.timeline();
    tl.fromTo(bgRef.current,     { scale: 1.1 },       { scale: 1,   duration: 3, ease: "power2.out" })
      .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 0.8, y: 0, duration: 1, ease: "power2.out" }, 0.3)
      .fromTo(titleRef.current,    { opacity: 0, y: 30 }, { opacity: 1,   y: 0, duration: 1, ease: "power2.out" }, 0.6)
      .fromTo(naviRef.current,     { opacity: 0, y: 30 }, { opacity: 1,   y: 0, duration: 1, ease: "power2.out" }, 0.9);

    return () => tl.kill();
  }, [pathname]);

  return (
    <>
      <div className="sub-visual">
        <div className="sub-visual-wrap">
          <img className="sub-visual-bg" src={bg} alt="" ref={bgRef} />
        </div>

        <SubNavi ref={naviRef} />
        <div className="sub-visual-text">
          <p ref={subtitleRef} className="sub-visual-subtitle">{subtitle}</p>
          <h2 ref={titleRef} className="sub-visual-title">{title}</h2>
        </div>
      </div>

      <main className="sub-content">
        <Outlet />
      </main>
    </>
  );
}