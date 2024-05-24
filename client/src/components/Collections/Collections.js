import React, { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router";
import { NavLink } from "react-router-dom";
import BookCard from "./BookCard/BookCard";

const Collections = () => {
  const [books, setBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);
  let navigate = useNavigate();
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
      <h1 className="text-4xl text-yellow-500 font-mono font-semibold lg:shadow rounded-xl  p-5 lg:mx-28 mx-5 mt-10">
        Hey!! Here are your loves{" "}
      </h1>
      <NavLink
        to="/listBooks"
        className="btn btn-gray-800 lg:mx-28 mx-5 mt-5 border rounded-lg text-center w-28 h-4 text-white"
      >
        {" "}
        Go to list View
      </NavLink>
      <div className="flex flex-col lg:flex lg:flex-row lg:flex-wrap items-center justify-center">
        {books.map((bookInfo) => (
          <BookCard bookInfo={bookInfo} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
