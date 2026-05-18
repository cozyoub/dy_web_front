// pages/sitemap.jsx
import { MENU_LIST } from "@/common/menuData";

function SitemapSection({ menu }) {
  return (
    <div className="item">
      <a href={menu.defaultPath ?? menu.path} className="parent-link">
        {menu.title}
      </a>
      {menu.subMenu?.length > 0 && (
        <ul>
          {menu.subMenu.map(sub => (
            <li key={sub.path}>
              <a href={sub.defaultPath ?? sub.path}>{sub.title}</a>
              {sub.subMenu?.length > 0 && (
                <ul>
                  {sub.subMenu.map(subSub => (
                    <li key={subSub.path}>
                      <a href={subSub.path}>{subSub.title}</a>
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
  return (
    <div className="sitemap-wrapper">
      <div className="grid">
        {MENU_LIST.map(menu => (
          <SitemapSection key={menu.path} menu={menu} />
        ))}
      </div>
    </div>
  );
}