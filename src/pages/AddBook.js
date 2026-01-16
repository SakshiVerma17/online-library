import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "Fiction",
    image: "",
    description: "",
  });

  function handleChange(e) {
    setBook({ ...book, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

   
    dispatch(
      addBook({
        id: Date.now(),
        ...book,
      })
    );

  
    navigate("/browse");
  }

  return (
    <div className="add-book-page">
      <h2 className="add-book-title">Add a New Book</h2>

      <form className="add-book-card" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={book.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <select
            name="category"
            value={book.category}
            onChange={handleChange}
          >
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Science Fiction">Science Fiction</option>
          </select>

          <input
            type="text"
            name="image"
            placeholder="Book Image URL"
            value={book.image}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="description"
          placeholder="Book Description"
          value={book.description}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
