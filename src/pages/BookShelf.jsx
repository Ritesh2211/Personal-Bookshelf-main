import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import BookShelfComponent from "../components/bookshelf";
const BookShelf = () => {
  return (
    <>
      <Navbar />
      <BookShelfComponent />
      <Footer />
    </>
  );
};

export default BookShelf;
