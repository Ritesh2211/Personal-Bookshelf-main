import React from "react";
import {
  BiLogoGmail,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
  BiLogoGithub,
} from "react-icons/bi";
const Footer = () => {
  return (
    <>
      <footer className="bg-black py-4  -z-10  w-full">
        <div className="container mx-auto flex justify-center items-center">
          <div className="text-gray-400">
            <p className="text-center">
              &copy; {new Date().getFullYear()}{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://riteshkatwe-portfolio.vercel.app/"
              >
                <u className="text-lg font-semibold">Ritesh Katwe</u>
              </a>
            </p>
            <p className="text-center">
              Personal BookShelf is your digital gateway to the world of
              literature and knowledge. Our online platform is designed to cater
              to book enthusiasts and anyone seeking to discover, organize, and
              engage with their favorite books.
            </p>
            <p className="text-center">
              <u>Contact me</u>
            </p>
            <div className="flex justify-center mb-2 text-4xl mt-4">
              <a href="mailto:riteshkatwe29@gmail.com">
                <BiLogoGmail />
              </a>
              <a
                href="https://www.linkedin.com/in/ritesh-katwe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white mx-2"
              >
                <BiLogoLinkedinSquare />
              </a>
              <a
                href="https://twitter.com/Riteshkatwe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white mx-2"
              >
                <BiLogoTwitter />
              </a>
              <a
                href="https://github.com/ritesh2211"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white mx-2"
              >
                <BiLogoGithub />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
