function InputField({type, placeholder}){
    return(
        <input
            className="border border-gray-400 outline-none p-3 w-full my-2"
            type={type} 
            placeholder={placeholder}
        />
    )
}

export default InputField;