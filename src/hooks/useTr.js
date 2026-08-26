import { useLanguage } from "@/contexts/LanguageContext";

/**
 * 텍스트를 그 자리에서 바로 번역한다.
 * 한글은 코드에 원문 그대로 남기고(따로 사전에 옮겨 적지 않음),
 * 영문 번역만 별도 파일에서 찾아 온다. 번역이 아직 없으면 한글이 그대로 보인다.
 *
 *   import en from "@/locales/en/solution01_02";
 *   const tr = useTr(en);
 *   <h3>{tr("mokup.title", "구성원과 조직이 함께 성장하는 스마트 HR")}</h3>
 *
 * 배열 안에서도 그대로 쓸 수 있다:
 *   const items = [
 *     tr("features.0", "임직원/관리자 모두의 시간을 아끼는 똑똑한 셀프서비스"),
 *     tr("features.1", "오차 없이 투명하게 연동되는 스마트한 근태 관리"),
 *   ];
 */
export default function useTr(dict) {
  const { lang } = useLanguage();

  return (key, ko) => {
    if (lang !== "en") return ko;
    const val = key
      .split(".")
      .reduce((acc, k) => (acc == null ? undefined : acc[k]), dict);
    return val ?? ko;
  };
}
