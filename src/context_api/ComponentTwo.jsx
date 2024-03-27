import ComponentThree from "./ComponentThree";

const ComponentTwo = ({ course }) => {
  return (
    <div>
      <p>Component Two</p>
      <ComponentThree course={course} />
    </div>
  );
};

export default ComponentTwo;
