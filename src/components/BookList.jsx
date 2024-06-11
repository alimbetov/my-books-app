import React, { useState, useEffect } from "react";

import { API_URL } from "../API.js";
import axios from "axios";
import BookCard from './BookCard.jsx'
const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (

<div className="card lg:card-side bg-base-100 shadow-xl grid-rows-3 divide-solid">
      {books.map((book) => (

        <BookCard key={book.id} book_data={book} />
      ))}
    </div>
  );
};

export default BookList;