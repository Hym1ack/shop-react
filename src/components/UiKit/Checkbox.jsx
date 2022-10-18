import s from "./Checkbox.module.css";

function Checkbox({ checked, onChange, children, labelClass, id }) {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        className={s.checkbox}
        checked={checked}
        onChange={onChange}
      />
      <label className={`${s.label} ${labelClass}`} htmlFor={id}>
        {children}
      </label>
    </>
  );
}

export default Checkbox;
