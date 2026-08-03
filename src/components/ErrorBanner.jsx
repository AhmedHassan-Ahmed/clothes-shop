const ErrorBanner = ({ message }) => {
    return (
        <div className="bg-red-100 text-red-700 border border-red-300 rounded-lg p-4">
            {message}
        </div>
    );
};

export default ErrorBanner;