import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * 현재 언어에 맞춰 "/en" 접두어를 자동으로 붙이는 Link.
 * 사이트 내부 이동은 react-router 의 Link 대신 이걸 쓴다.
 * (외부 링크는 기존처럼 <a> 를 그대로 사용)
 */
export default function LangLink({ to, ...rest }) {
  const { localizePath } = useLanguage();
  return <Link to={localizePath(to)} {...rest} />;
}
