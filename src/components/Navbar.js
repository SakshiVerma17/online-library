import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/browse" className="nav-link">Browse Books</Link>
      <Link to="/add" className="nav-link">Add Book</Link>
    </div>
  );
}

export default Navbar;
