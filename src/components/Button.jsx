function Buttons({label, variant = "primary"}){
     const styles = {
        primary: "bg-green-800 text-white hover:bg-green-900",
        outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100",
    };

    return(
        <button className={`flex px-4 py-2 text-sm mt-10 ${styles[variant]} 
             transition`}>
            {label}</button>
    )
}

export default Buttons;