export default function Review({
  text,
  option1,
  option2,
  option3,
  option4,
  value,
  name,
  handleChange,
  calculate,
}) {
  return (
    <div className="review">
      <span>{text}</span>
      <select name={name} id="" value={value} onChange={handleChange}>
        <option value={option1}> Dissatisfied {option1}%</option>
        <option value={option2}> It was okay {option2}%</option>
        <option value={option3}> it was good {option3}% </option>
        <option value={option4}>Absolutely amazing {option4}%</option>
      </select>
    </div>
  );
}
