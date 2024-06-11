import { useParams } from 'react-router-dom';
import '../styles/output-tail.css';
import axios from "axios";
import React, { useState, useEffect } from "react";

const SinglePage = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://example-data.draftbit.com/books/${id}`)
      .then((res) => {
        console.log(res.data);
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="bookDetails">
    <div className="bookImage">
      <h2>{book?.title}</h2>
      <img src = {book?.image_url} alt="#"
      />
    </div>
    <div className="bookDescription">
      <h2>Description</h2>
      <p>{book?.description}</p>
      <h2>Authors</h2>
      <p>{book?.authors}</p>
      <h2>Genres</h2>
      <p>{book?.genres}</p>
    </div>
    
  </div>
  );
}

export {SinglePage};
