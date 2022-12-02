import s from "./Checkbox.module.css";

function Checkbox({
  isRadio = false,
  checked,
  disabled = false,
  onChange,
  children,
  labelClass,
  id,
  value,
  name,
}) {
  return (
    <>
      <input
        disabled={disabled}
        type={isRadio ? "radio" : "checkbox"}
        id={id}
        name={name}
        value={value}
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
