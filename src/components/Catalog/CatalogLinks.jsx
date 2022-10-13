import { NavLink } from "react-router-dom";
import s from "./Catalog.module.css";

function CatalogLinks({ catalog }) {
  const { items, title } = catalog;

  const setActive = ({ isActive }) =>
    isActive ? `${s.link} ${s.linkActive}` : s.link;

  const links = items.map((link) => (
    <NavLink className={setActive} to={link.to} key={link.to}>
      {link.label}
    </NavLink>
  ));

  return (
    <div>
      <h4 className={s.linkTitle}>{title}</h4>
      <ul className={s.links}>{links}</ul>
    </div>
  );
}

export default CatalogLinks;
