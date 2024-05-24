import React from "react";

const TableData = ({ bookInfo }) => {
    console.log(bookInfo);
  return (
  
      <tr className="whitespace-nowrap">
        {/* <td className="px-6 py-4 text-sm text-gray-500"></td> */}
        <td className="px-6 py-4 flex-col">
          <div className="text-sm text-gray-900">{bookInfo.book}</div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-500 flex-col flex">{bookInfo.author}</div>
        </td>
        <td className="px-6 py-4 text-sm text-gray-500">{bookInfo.purchaseDate}</td>
        <td className="px-6 py-4">
        <div className="text-sm text-gray-500 flex-col flex">{bookInfo.category}</div>
        </td>
        <td className="px-6 py-4">
        <div className="text-sm text-gray-500 flex-col flex">{bookInfo.price} BDT</div>
        </td>
      </tr>

  );
};

export default TableData;
