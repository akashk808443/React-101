import React, { useState } from "react";
import styles from "./Form.module.css";
export const Form = () => {
  const [formData, setFormdata] = useState({ showPassword: false });
  const handleChange = (e) => {
    const userName = e.target.name;
    if (e.target.type === "checkbox") {
      setFormdata({ ...formData, [userName]: e.target.checked });
    } else if (e.target.type === "file") {
      setFormdata({ ...formData, [userName]: e.target.files });
    } else {
      setFormdata({ ...formData, [userName]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.form}>
      <h3>FORM</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.grid}>
          <label>User name</label>
          <input type="text" name="username" onChange={handleChange}></input>
        </div>
        <div className={styles.grid}>
          <label>Password</label>
          <input
            type={formData.showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
          ></input>
          <div />
          <div>
            <input
              type="checkbox"
              name="showPassword"
              onChange={handleChange}
            ></input>
            <label>Show password</label>
          </div>
        </div>
        <div className={styles.grid}>
          <label>Age</label>
          <input type="number" name="age" onChange={handleChange}></input>
        </div>
        <div className={styles.grid}>
          <label>Gender</label>
          <select name="gender" onChange={handleChange}>
            <option value="m">male</option>
            <option value="f">Female</option>
          </select>
        </div>
        <div className={styles.grid}>
          <label>Gender</label>
          <div>
            <input type="radio" value="m" name="genderRadio" />
            Male
            <br />
            <input type="radio" value="f" name="genderRadio" />
            Female
          </div>
        </div>
        <div className={styles.grid}>
          <label>dob</label>
          <input type="date" name="dob" onChange={handleChange}></input>
        </div>
        <div className={styles.grid}>
          <label>resume</label>
          <input type="file" name="resume" onChange={handleChange}></input>
        </div>
        <div />
        <div className={styles.grid}>
          <div />
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
