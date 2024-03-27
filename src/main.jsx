import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// const hey = "Hello there!!!!";
// const anotherHey = "You are welcome to 42 Vienna!!!!";

// const p = (
//   <div>
//     <p>{hey}</p>
//     <p>{anotherHey}</p>
//   </div>
// );

// const TestFunction = function ({ course, time }) {
//   // const react = "ReactJay";
//   console.log(course, time);
//   return (
//     <div>
//       <p>Welcome to this {`${course} and ${time}`} course</p>
//     </div>
//   );
// };

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <TestFunction course="React and HTML" time="2hrs" />
// );
