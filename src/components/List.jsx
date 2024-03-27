import React from "react";

const List = () => {
  const items = ["React", "Vue", "Angula", "CSS", "HTML", "JS"];
  return (
    <div>
      <p>Courses</p>
      <ol>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
    </div>
  );
};

export default List;
