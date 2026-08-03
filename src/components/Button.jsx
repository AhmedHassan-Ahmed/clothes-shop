function Buttons({ label, variant = "primary", onClick, type = "button" }) {

    const styles = {
        primary: "bg-green-800 text-white hover:bg-green-900",
        outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                w-full md:w-fit
                px-3 py-2 text-sm
                rounded-lg
                transition duration-300
                ${styles[variant]}
            `}
        >
            {label}
        </button>
    )
}

export default Buttons;