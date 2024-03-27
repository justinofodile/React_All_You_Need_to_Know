import ClassBaseComponent from "./ClassBaseComponent";

const SubConponent = () => {
  return (
    <div>
      <p>Welcome to our subcomponent</p>
      <ClassBaseComponent test="Yes">
        We accept Class Base Comonent
      </ClassBaseComponent>
    </div>
  );
};

export default SubConponent;
