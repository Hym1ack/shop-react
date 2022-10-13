import s from "./Catalog.module.css";
import CatalogLinks from "./CatalogLinks";
import { localeData } from "../../database/localeData";

function Catalog() {
  const catalogs = localeData.map((item) => item);

  return (
    <div className={s.catalog}>
      <h5 className={s.title}>Каталог</h5>
      {catalogs.map((catalog) => (
        <CatalogLinks key={catalog.title} catalog={catalog} />
      ))}
    </div>
  );
}

export default Catalog;
