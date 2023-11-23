export default function Bill({ value, name, text }) {
  return (
    <div>
      <span>{text}</span>
      <input type="text" value={value} name={name} />
    </div>
  );
}
