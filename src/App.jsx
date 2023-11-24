import { useState } from "react";
import Review from "./Review";
//import Review2 from "./Review2";
import Text from "./Text";
import Button from "./Button";
import Bill from "./Bill";
function App() {
  const [state, setState] = useState({
    bill: "",
    review1: "",
    review2: "",
  });
  function handleChange(e) {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleKeyDown(e) {
    const keyCode = e.keyCode || e.which;

    if ((isNaN(e.key) && keyCode !== 8) || e.key === " ") {
      e.preventDefault();
      alert("Please input a Number");
      HandleReset();
    }
  }

  function HandleReset() {
    setState({ bill: "", review1: "", review2: "" });
  }

  const calculateTip = (bill, review1, review2) => {
    const average = (Number(review1) + Number(review2)) / 2;
    const percentage = average / 100;
    const tip = bill * percentage;
    return tip;
  };

  return (
    <div className="parent">
      <Bill
        value={state.bill}
        name="bill"
        text="How much was the bill"
        handleChange={handleChange}
        keyDown={handleKeyDown}
      />
      <Review
        text="How did you like the service?"
        option1={0}
        option2={5}
        option3={10}
        option4={20}
        value={state.review1}
        name="review1"
        handleChange={handleChange}
        calculate={calculateTip}
      />
      <Review
        text="How did your friend like the services?"
        option1={0}
        option2={5}
        option3={10}
        option4={20}
        value={state.review2}
        name="review2"
        handleChange={handleChange}
        calculate={calculateTip}
      />

      <Text
        bill={state.bill}
        calculate={calculateTip}
        review1={state.review1}
        review2={state.review2}
      />
      <Button handleReset={HandleReset} />
    </div>
  );
}

export default App;
