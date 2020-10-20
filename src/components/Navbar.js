import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Amby Library</h1>
      <p>You have {books.length} books in your list to read</p>
    </div>
  );
};

export default Navbar;
