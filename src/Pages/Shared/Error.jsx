import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f0fdfa] text-gray-800 px-4">
            <div className="text-9xl mb-4">😵‍💫</div>
            <h1 className="text-6xl font-bold text-[#34C9B6] mb-2">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Oops! Page Not Found</h2>
            <p className="text-center text-gray-600 max-w-md mb-8">
                We can’t find the page you’re looking for. It might have been removed,
                renamed, or did it ever exist? 🤔
            </p>
            <Link
                to={'/'}
                className="bg-[#34C9B6] hover:bg-[#2bb3a3] text-white font-medium py-2 px-6 rounded-2xl shadow-lg transition duration-300"
            >
                🔙 Go Home
            </Link>
        </div>
    );
};

export default Error;