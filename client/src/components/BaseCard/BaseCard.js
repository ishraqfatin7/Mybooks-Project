import React from 'react';
import bookImg from '../../images/book.png';
const BaseCard = () => {
    return (
        <div className="h-screen flex items-center justify-center dark:bg-gray-900 ">
            <div className="max-w-sm- mx-auto p-8 bg-white rounded-xl shadow-md space-y-2 sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-6 dark:bg-gray-800">
            <img src={bookImg} className="sm:flex-shrink-0 h-32 mx-auto ring-4 rounded-full ring-green-200 sm:mx-0 transform duration-200 hover:scale-105" alt="Books" />
            <div className="text-center mt-4">
                <div className="space-y-0.5">
                    <p className="text-lg font-semibold dark:text-white">
                        Explore Your Books 
                    </p>
                    
                </div>
                <button className="btn-purple">Go to Vault</button>
            </div>
        </div>
        </div>
    );
};

export default BaseCard;