import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TableData from "./TableData";

const Table = () => {
    const [books, setBooks] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
      fetch("http://localhost:5000/books")
        .then((response) => response.json())
        .then((books) => {
          setBooks(books);
          setLoaded(true);
        });
    }, [loaded]);
  return (
    <div>
        <h1 className="text-4xl text-yellow-500 font-mono font-semibold lg:shadow rounded-xl  p-5 lg:mx-28 mx-5 mt-10">Hey!! Here are your loves </h1> 
          <NavLink to ="/collections" className="btn btn-gray-800 lg:mx-28 mx-5 mt-5 border rounded-lg text-center w-28 h-4 text-white" > Go to Image View</NavLink> 
      <div className="container flex lg:flex-row justify-center items-top mx-auto lg:h-screen ">
      
        <div className="flex flex-col">
          <div className="w-full">
            <div className="border-b border-gray-200 shadow-lg">
              <table className="divide-y divide-gray-300 ">
                <thead className="bg-gray-50">
                  <tr>
                    {/* <th className="px-6 py-2 text-xs text-gray-500">ID</th> */}
                    <th className="px-6 py-2 text-xs text-gray-500">Book Name</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Author</th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                     Purchase Date
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">Category</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Price</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                {
                     books.map((bookInfo,key) => 
            
                     <TableData bookInfo ={bookInfo}/>
                 
               )
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
