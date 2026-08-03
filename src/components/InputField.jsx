function InputField({ type, placeholder, value, onChange }) {
  return (
    <input
      className="border border-gray-400 outline-none p-3 w-full my-2"
      type={type}
      placeholder={placeholder}
      value={value}        
      onChange={onChange}  
    />
  );
}

export default InputField;