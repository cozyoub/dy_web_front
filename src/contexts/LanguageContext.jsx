import { createContext, useContext, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const lang = location.pathname.startsWith("/en") ? "en" : "ko";

  // 현재 경로 기준으로 언어만 바꾼 경로 반환 (텍스트 스위칭 X, 라우팅 전환용)
  const toggleLang = () => {
    if (lang === "ko") {
      const nextPath = `/en${location.pathname === "/" ? "" : location.pathname}`;
      navigate(nextPath + location.search);
    } else {
      const stripped = location.pathname.replace(/^\/en/, "") || "/";
      navigate(stripped + location.search);
    }
  };

  // 다른 언어로 갈 때 쓸 경로 (링크 href 등에 활용)
  const getPathForLang = (targetLang) => {
    if (targetLang === "en") {
      return `/en${location.pathname === "/" ? "" : location.pathname}`;
    }
    return location.pathname.replace(/^\/en/, "") || "/";
  };

  // 사이트 내부 링크에 현재 언어 접두어를 붙인다.
  // 영문 페이지에서 메뉴를 눌렀을 때 국문으로 튕기지 않게 하는 용도.
  const localizePath = (path) => {
    if (lang !== "en") return path;
    if (typeof path !== "string" || !path.startsWith("/")) return path;
    if (path === "/en" || path.startsWith("/en/")) return path;
    return path === "/" ? "/en" : `/en${path}`;
  };

  const value = useMemo(
    () => ({ lang, toggleLang, getPathForLang, localizePath }),
    [lang, location.pathname]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}