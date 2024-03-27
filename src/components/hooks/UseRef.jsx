import React, { useState, useRef, useEffect } from "react";

const UseRef = () => {
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
    inputRef.current.style.border = "2px solid red";
  }, []);

  const handleChange = (e) => {
    setInput((preVal) => ({ ...preVal, [e.target.name]: e.target.value }));
    console.log(input);
  };
  return (
    <div>
      <h3>UseRef User Registration</h3>
      <div>
        <label>Name: </label>
        <input
          ref={inputRef}
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default UseRef;
