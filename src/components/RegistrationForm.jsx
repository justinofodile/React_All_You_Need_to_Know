import { useState } from "react";

const RegistrationForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    aggrement: "",
  });

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setData((preVal) => ({ ...preVal, [e.target.name]: e.target.checked }));
    } else {
      setData((preVal) => ({
        ...preVal,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  //   console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Registration Page</p>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.passpword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <div>
            <label>Male:</label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Female:</label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            name="aggrement"
            checked={data.aggrement}
            onChange={handleChange}
          />
        </div>
        <br />
        <input
          type="submit"
          value="Submit"
          name="submit"
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default RegistrationForm;
