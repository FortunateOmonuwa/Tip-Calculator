export default function Bill({ value, name, text, handleChange }) {
  return (
    <div>
      <span>{text}</span>
      <input type="text" value={value} name={name} onChange={handleChange} />
    </div>
  );
}
