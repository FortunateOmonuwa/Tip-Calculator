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
        <option value={option1}>Dissatisfied (0%)</option>
        <option value={option2}>It was okay (5%)</option>
        <option value={option3}>It was good (10%)</option>
        <option value={option4}>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
