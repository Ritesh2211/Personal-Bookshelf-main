import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import BookDetails from "../components/home/BookDetails";
const BookDetailsPage = () => {
  return (
    <>
      <Navbar />
      <BookDetails />
      <Footer />
    </>
  );
};

export default BookDetailsPage;
