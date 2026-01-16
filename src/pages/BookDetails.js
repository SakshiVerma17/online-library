import { Link, useParams } from "react-router-dom";
import dummyBooks from "../data/dummyBooks";

function BookDetails() {
  const { id } = useParams();

  const book = dummyBooks.find((b) => b.id === parseInt(id));

  if (!book) {
    return <h2 style={{ textAlign: "center" }}>Book Not Found</h2>;
  }

  return (
    <div className="book-details-page">
      <div className="book-details-card">
        <img src={book.image} alt={book.title} />

        <div className="book-info">
          <h1>{book.title}</h1>

          <p>
            <strong>Author:</strong> {book.author}
          </p>

          <p>
            <strong>Category:</strong> {book.category}
          </p>

          <p className="description">{book.description}</p>

          <Link to="/browse" className="back-btn">
            ← Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
