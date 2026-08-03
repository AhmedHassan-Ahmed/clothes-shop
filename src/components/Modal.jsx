const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 w-[90%] md:w-[500px]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">
                        Add Product
                    </h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 text-xl"
                    >
                        ×
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;