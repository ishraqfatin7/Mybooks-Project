import React from "react";

const BookCard = ({bookInfo}) => {
 console.log(bookInfo);
  return (
    <div>
      <body className="antialiased font-sans">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center ">
            <div className="max-w-sm md:w-1/2 w-full sm:w-1/2 lg:w-full py-6 px-3">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="bg-cover bg-center h-56 p-4" style={{backgroundImage:`url(${bookInfo.bookImage})`}}>
                  <div className="flex justify-end">
                  
                  </div>
                </div>
                <div className="p-4 h-32">
                  <p className="uppercase tracking-wide text-2xl font-bold text-gray-700">
                    {bookInfo.book}
                  </p>
                  <p className="text-md text-gray-900">Price: {bookInfo.price} BDT</p>
                  { bookInfo.isBoughtOnline ==="checked"?<p className="text-yellow-700">Bought Online</p>:""}
                  <a href ={bookInfo.bookLink} className="text-green-400 shadow-md rounded-sm mt-1">Buy Link</a>
                </div>
                <div className="flex p-4 border-t border-gray-300 text-gray-700">
                  <div className="flex-1  inline-flex h-content items-center">
                    {bookInfo.description}
                  </div>
                </div>
                <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                  <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">
                    Author
                  </div>
                  <div className="flex items-center pt-2">
                    <div className="bg-cover bg-center w-10 h-10 rounded-full"></div>
                    <div>
                      <p className="font-bold text-gray-900">{bookInfo.author}</p>
                      <p className="text-sm text-gray-700">Bought Date: {bookInfo.purchaseDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default BookCard;
