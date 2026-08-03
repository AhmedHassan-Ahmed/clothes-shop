const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center gap-3 mt-8">
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="px-4 py-2 border rounded-lg disabled:opacity-50"
            >
                Previous
            </button>
            <span className="px-4 py-2">
                {currentPage} / {totalPages}
            </span>
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="px-4 py-2 border rounded-lg disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;