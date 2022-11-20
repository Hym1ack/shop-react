import { NavLink } from "react-router-dom";

function AppLink({ children, className, activeClass, to }) {
  const setActive = ({ isActive }) =>
    isActive ? `${className} ${activeClass}` : className;

  return (
    <NavLink className={setActive} to={to}>
      {children}
    </NavLink>
  );
}

export default AppLink;
