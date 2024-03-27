import withCounter from "./HOC/withCounter";

const ClickCounter = ({ handleIncreament, counter }) => {
  return (
    <div>
      <button onClick={handleIncreament}>Clicked {counter} Times</button>
    </div>
  );
};

export default withCounter(ClickCounter);
