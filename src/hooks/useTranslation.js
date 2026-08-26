import { useLanguage } from "@/contexts/LanguageContext";
import common from "@/locales/common";

/**
 * 공통 텍스트(GNB / 푸터 / 반복 UI 라벨) 전용 훅.
 * 페이지 본문 텍스트는 페이지별 사전 + usePageContent 를 쓴다.
 *
 *   const { t, menuTitle } = useTranslation();
 *   <a>{t.footer.sitemap}</a>
 */
export function useTranslation() {
  const { lang } = useLanguage();
  const t = common[lang] ?? common.ko;

  // menuData 의 한글 제목을 현재 언어로 치환한다.
  // path 로 먼저 찾고, path 가 없는 항목(외부링크)은 원문 제목을 키로 찾는다.
  const menuTitle = (item) =>
    t.menu?.[item?.path] ?? t.menu?.[item?.title] ?? item?.title;

  return { t, lang, menuTitle };
}

export default useTranslation;
