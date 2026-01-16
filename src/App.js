import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
import PageNotFound from "./pages/PageNotFound";




function App() {
  return (
    <BrowserRouter>
      <Navbar />

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/browse" element={<BrowseBooks />} />
  <Route path="/books/:category" element={<BrowseBooks />} />
  <Route path="/add" element={<AddBook />} />
  <Route path="/book/:id" element={<BookDetails />} />
  <Route path="*" element={<PageNotFound />} />
</Routes>

    </BrowserRouter>
  );
}

export default App;
