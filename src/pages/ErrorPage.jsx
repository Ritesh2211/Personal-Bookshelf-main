import React from "react";
import Navbar from "../components/common/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";
const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <main className="grid bg-gray-900 min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-4xl font-bold text-cyan-400">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-400">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              className="bg-cyan-500 p-1 border-b-4 border-cyan-700 hover:bg-cyan-700  text-2xl font-bold rounded-full h-12 w-48"
              to="/"
            >
              Go back Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
