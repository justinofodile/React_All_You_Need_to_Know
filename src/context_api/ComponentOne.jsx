import ComponentTwo from "./ComponentTwo";

const ComponentOne = ({ course }) => {
  return (
    <div>
      <p>Component One</p>
      <ComponentTwo course={course} />
    </div>
  );
};

export default ComponentOne;
