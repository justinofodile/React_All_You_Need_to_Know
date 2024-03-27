import { useState } from "react";

const Form = () => {
  const [course, setCourse] = useState("");
  const [desc, setDesc] = useState("");
  const [country, setCountry] = useState("");
  const [aggreement, setAggreement] = useState(false);
  const [gender, setGender] = useState("");

  const handleChnage = (event) => {
    // console.log();
    if (event.target.name === "course") {
      setCourse(event.target.value);
    } else if (event.target.name === "desc") {
      setDesc(event.target.value);
    } else if (event.target.name === "country") {
      setCountry(event.target.value);
    } else if (event.target.name === "aggreement") {
      setAggreement(event.target.checked);
    } else if (event.target.name === "gender") {
      setGender(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(course);
    console.log(desc);
    console.log(country);
    console.log(aggreement);
    console.log(gender);
  };

  /* console.log(course);
  console.log(desc);
  console.log(country); */
  //   console.log(gender);

  return (
    <div>
      <p>Form Component</p>
      <form onSubmit={handleSubmit}>
        <input name="course" value={course} onChange={handleChnage} />
        <br />
        <textarea name="desc" value={desc} onChange={handleChnage}></textarea>
        <br />
        <select name="country" value={country} onChange={handleChnage}>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="USA">USA</option>
          <option value="Australia">Australia</option>
        </select>
        <br />
        <input
          type="checkbox"
          name="aggreement"
          checked={aggreement}
          onChange={handleChnage}
        />
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChnage}
        />
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChnage}
        />
        <input
          type="radio"
          name="gender"
          value="others"
          onChange={handleChnage}
        />
        <br />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default Form;
