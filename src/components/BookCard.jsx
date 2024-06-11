import { useNavigate } from "react-router-dom";

const BookCard = (props) => {
 const { book_data: book } = props;
 const navigate = useNavigate()
  return (




<div className="card lg:card-side bg-base-100 shadow-xl grid-rows-3 divide-solid">
  <figure>
  <img  className="size-3.5"  src = {book?.image_url} alt="#"
      onClick={() => navigate(`/books/${book.id}`)}
      />
    </figure>
  <div className="card-body auto-rows-auto">
    <h2 className="card-title">{book?.title}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
    <h2>Authors</h2>
      <p>{book?.authors}</p>
    </div>
  </div>
</div>


  )
}
export default BookCard