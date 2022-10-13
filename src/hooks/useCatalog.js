import { useLocation } from "react-router-dom";
import { localeData } from "../database/localeData";

function useCatalog() {
  const location = useLocation().pathname;

  return localeData.reduce((acc, links) => {
    let result = { ...acc };

    links.items.forEach((link) => {
      if (location.includes(link.to)) result = link;
    });

    return result;
  }, {});
}

export { useCatalog };
