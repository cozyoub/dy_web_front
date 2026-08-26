import LangLink from "@/components/LangLink";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { FAMILY_SITES } from "@/common/familySites";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const { company, footer } = t;
  const familySiteName = (site) => (lang === "en" ? (site.nameEn ?? site.name) : site.name);

  const handleFamilySiteChange = (e) => {
    const url = e.target.value;
    if (url && url !== "#") window.open(url, "_blank", "noopener,noreferrer");
    e.target.value = "";
  };

  return (
    <>
      <footer className="footer">
        <div className="inner">
          <div className="ft-top">
            <h1>
              <img src="/images/common/footer_logo.svg" alt={company.name} />
            </h1>
            <div className="ft-top-right">
              <ul>
                <li>
                  <LangLink to="/about/about02">{footer.directions}</LangLink>
                </li>
                <li>
                  <LangLink to="/sitemap">{footer.sitemap}</LangLink>
                </li>
              </ul>
              <select
                className="family-site-select"
                defaultValue=""
                onChange={handleFamilySiteChange}
                aria-label={footer.familySite}
              >
                <option value="" disabled>
                  {footer.familySite}
                </option>
                {FAMILY_SITES.map((site) => (
                  <option key={site.name} value={site.url}>
                    {familySiteName(site)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="ft-bottom">
            <ul>
              <li>
                <ul>
                  <li>
                    <span>{footer.labelCompany}</span>
                    <p>{company.name}</p>
                  </li>
                  <li>
                    <span>{footer.labelCeo}</span>
                    <p>{company.ceo}</p>
                  </li>
                  <li>
                    <span>{footer.labelBizNo}</span>
                    <p>{company.bizNo}</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <span>{footer.labelTel}</span>
                    <p>{company.tel}</p>
                  </li>
                  <li>
                    <span>{footer.labelEmail}</span>
                    <p>{company.email}</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  {footer.offices.map((office) => (
                    <li key={office.label}>
                      <span>{office.label}</span>
                      <p>{office.address}</p>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
