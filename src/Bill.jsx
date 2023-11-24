export default function Bill({ value, name, text, handleChange, keyDown }) {
  return (
    <div>
      <span>{text}</span>
      <input
        type="text"
        value={value}
        name={name}
        onChange={handleChange}
        onKeyDown={keyDown}
      />
    </div>
  );
}
