import { useSelector } from "react-redux";
import { useFormik } from "formik";
import s from "./ProfileSettings.module.css";

function ProfileSettings() {
  const { userName, phoneNumber, birthdayDate, email } = useSelector(
    (state) => state.user
  );

  const formik = useFormik({
    initialValues: {
      userName: userName || "",
      phoneNumber: phoneNumber || "",
      birthdayDate: birthdayDate || "",
      email: email || "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={s.settings}>
      <div className={s.form}>
        <label className={s.title}>Имя</label>
        <input
          className={s.input}
          type="text"
          name="userName"
          value={formik.values.userName}
          onChange={formik.handleChange}
        />
        <label className={s.title}>Номер телефона</label>
        <input
          className={s.input}
          type="number"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          placeholder="+7 000 000 00 00"
        />
        <label className={s.title}>День рождения</label>
        <input
          className={s.input}
          type="text"
          name="birthdayDate"
          value={formik.values.birthdayDate}
          onChange={formik.handleChange}
          placeholder="дата месяц"
        />
        <label className={s.title}>Эл. почта</label>
        <input
          className={s.input}
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
    </form>
  );
}

export default ProfileSettings;
