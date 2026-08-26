// pages/sitemap.jsx
import { MENU_LIST } from "@/common/menuData";
import LangLink from "@/components/LangLink";
import { useTranslation } from "@/hooks/useTranslation";

function MenuLink({ menu, className, menuTitle }) {
  const title = menuTitle(menu);

  if (menu.externalLink) {
    return (
      <a href={menu.externalLink} target="_blank" rel="noopener noreferrer" className={className}>
        {title}
      </a>
    );
  }

  return (
    <LangLink to={menu.defaultPath ?? menu.path} className={className}>
      {title}
    </LangLink>
  );
}

function SitemapSection({ menu, menuTitle }) {
  return (
    <div className="item">
      <MenuLink menu={menu} className="parent-link" menuTitle={menuTitle} />
      {menu.subMenu?.length > 0 && (
        <ul>
          {menu.subMenu.map((sub) => (
            <li key={sub.path ?? sub.title}>
              <MenuLink menu={sub} menuTitle={menuTitle} />
              {sub.subMenu?.length > 0 && (
                <ul>
                  {sub.subMenu.map((subSub) => (
                    <li key={subSub.path ?? subSub.title}>
                      <MenuLink menu={subSub} menuTitle={menuTitle} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Sitemap() {
  const { menuTitle } = useTranslation();

  return (
    <div className="sitemap-wrapper">
      <div className="grid">
        {MENU_LIST.map((menu) => (
          <SitemapSection key={menu.path ?? menu.title} menu={menu} menuTitle={menuTitle} />
        ))}
      </div>
    </div>
  );
}
