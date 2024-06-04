import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AuthorDetails from "../components/home/AuthorDetails";
const AuthorDetailsPage = () => {
  return (
    <>
      <Navbar />
      <AuthorDetails />
      <Footer />
    </>
  );
};

export default AuthorDetailsPage;
