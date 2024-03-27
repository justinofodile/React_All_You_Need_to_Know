import { useState } from "react";

const ConditionalRendering = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  //   const [text, setText] = useState(null);

  const handleLogin = () => {
    setIsLoggedin(true);
  };
  const handleLogout = () => {
    setIsLoggedin(false);
  };

  let text = null;
  if (!isLoggedin) {
    // setText("Please sigin to continue");
    text = "Please sign in to continue";
  } else {
    // setText("Welcome User");
    text = "Welcome User";
  }

  return (
    <div>
      {/*  {course === "react" ? (
        <p>This is React course</p>
      ) : course === "vue" ? (
        <p>This is Vue course</p>
      ) : null} */}
      <p>{text}</p>
      {!isLoggedin ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default ConditionalRendering;
