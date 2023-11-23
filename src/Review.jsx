export default function Review({
  text,
  option1,
  option2,
  option3,
  option4,
  value,
  name,
  handleChange,
}) {
  return (
    <div>
      <span>{text}</span>
      <select name={name} id="" value={value} onChange={handleChange}>
        <option value="Dissatisfied"> {option1} (0%)</option>
        <option value="Okay"> {option2} (5%)</option>
        <option value="Good"> {option3} (10%) </option>
        <option value="Amazing">{option4} (20%)</option>
      </select>
    </div>
  );
}
