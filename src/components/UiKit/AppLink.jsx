import { NavLink } from "react-router-dom";

function AppLink({ children, className, activeClassActive, to }) {
  const setActive = ({ isActive }) =>
    isActive ? `${className} ${activeClassActive}` : className;

  return (
    <NavLink className={setActive} to={to}>
      {children}
    </NavLink>
  );
}

export default AppLink;
