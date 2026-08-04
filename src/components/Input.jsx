const Input = ({ name, type = "text", placeholder, value, onChange }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
    />
  );
};

export default Input;
