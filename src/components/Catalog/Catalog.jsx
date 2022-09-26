import { Link } from "react-router-dom";
import s from "./Catalog.module.css";
import { linksCatalog } from "../../database/linksCatalog";

function Catalog() {
  const linksElements = linksCatalog.map((obj) => {
    const links = obj.items.map((link) => (
      <Link className={s.link} to={link.to} key={link.to}>
        {link.label}
      </Link>
    ));
    return (
      <div key={obj.title}>
        <h4 className={s.linkTitle}>{obj.title}</h4>
        <ul className={s.links}>{links}</ul>
      </div>
    );
  });

  return (
    <div className={s.catalog}>
      <h5 className={s.title}>Каталог</h5>
      {linksElements}
    </div>
  );
}

export default Catalog;
