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
    if (isNaN(e.key)) {
      e.preventDefault();
      alert("Please input a Number");
      HandleReset();
    }
  }

  function HandleReset() {
    setState({ bill: "", review1: "", review2: "" });
  }
  return (
    <>
      <Bill
        value={state.bill}
        name="bill"
        text="How much was the bill"
        handleChange={handleChange}
        keyDown={handleKeyDown}
      />
      <Review
        text="How did you like the service?"
        option1="Dissatisfied"
        option2="It was okay"
        option3="It was good"
        option4="Absolutely amazing Absolutely amazing"
        value={state.review1}
        name="review1"
        handleChange={handleChange}
      />
      <Review
        text="How did your friend like the services?"
        option1="Dissatisfied"
        option2="It was okay"
        option3="It was good"
        option4="Absolutely amazing"
        value={state.review2}
        name="review2"
        handleChange={handleChange}
      />

      <Text bill={state.bill} />
      <Button handleReset={HandleReset} />
    </>
  );
}

export default App;
