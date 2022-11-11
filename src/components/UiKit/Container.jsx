import s from "./Container.module.css";

function Container({ children, className }) {
  const classes = className ? `${s.container} ${className} ` : s.container;

  return <div className={classes}>{children}</div>;
}

export default Container;
