import s from "./Catalog.module.css";
import { AppLink } from "../UiKit/AppLink";

function CatalogLinks({ catalog }) {
  const { items, title } = catalog;

  const links = items.map((link) => (
    <AppLink
      className={s.link}
      activeClassActive={s.linkActive}
      to={link.to}
      key={link.to}
    >
      {link.label}
    </AppLink>
  ));

  return (
    <div>
      <h4 className={s.linkTitle}>{title}</h4>
      <ul className={s.links}>{links}</ul>
    </div>
  );
}

export default CatalogLinks;
