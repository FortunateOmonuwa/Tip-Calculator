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
  function handleChange() {}
  return (
    <>
      <Bill value={state.bill} name="bill" text="How much was the bill" />
      <Review
        text="How did you like the service?"
        option1="Dissatisfied"
        option2="Okay"
        option3="Good"
        option4="Amazing"
        value={state.review1}
        name="review1"
      />
      <Review
        text="How did your friend like the services?"
        option1="Dissatisfied"
        option2="Okay"
        option3="Good"
        option4="Amazing"
        value={state.review2}
        name="review2"
      />

      <Text />
      <Button />
    </>
  );
}

export default App;
