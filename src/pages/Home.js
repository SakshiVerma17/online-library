import { Link } from "react-router-dom";
import dummyBooks from "../data/dummyBooks";

function Home() {
  return (
    <div className="home">
     
      <section className="hero">
        <h1>Welcome to the Online Library</h1>
        <p>Discover timeless classics and modern masterpieces</p>
      </section>

      
      <section className="categories">
        <h2>Book Categories</h2>
        <div className="category-grid">
          <Link to="/books/Sci-Fi" className="category-card">
            <h3>Sci-Fi</h3>
          </Link>

          <Link to="/books/Fiction" className="category-card">
            <h3>Fiction</h3>
          </Link>

          <Link to="/books/Non-Fiction" className="category-card">
            <h3>Non-Fiction</h3>
          </Link>
        </div>
      </section>

     
      <section className="popular">
        <h2>Popular Books</h2>

        <div className="books-grid">
          {dummyBooks.slice(0, 6).map((book) => (
            <div className="card" key={book.id}>
              <img
                src={book.image}
                alt={book.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3>{book.title}</h3>
              <p><b>Author:</b> {book.author}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
