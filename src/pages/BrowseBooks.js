import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import dummyBooks from "../data/dummyBooks";

function BrowseBooks() {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  
  const reduxBooks = useSelector((state) => state.books?.list);

  
  const books = reduxBooks && reduxBooks.length > 0 ? reduxBooks : dummyBooks;

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = !category || book.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <h2>Browse Books</h2>

      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="books-grid">
        {filteredBooks.map((book) => (
          <div className="card" key={book.id}>
            
            <img
              src={book.image}
              alt={book.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />

            <h3>{book.title}</h3>
            <p><b>Author:</b> {book.author}</p>
            <p><b>Category:</b> {book.category}</p>

            <Link to={`/book/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;
