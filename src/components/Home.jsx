import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="pt-20 flex flex-col flex-wrap justify-center text-center w-screen h-screen">
        <div className="">
          <div className="flex flex-col justify-center">
            <h1 className="text-7xl mb-20 mx-1 text-gray-200">
              Explore the World of Crypto
            </h1>
            <div className="flex flex-col max-w-fit mx-auto mb-4">
              <Link
                className="lg:text-2xl text-center text-md text-white border-2 rounded-md p-2 mb-6 hover:scale-110 duration-500"
                to="/converter"
              >
                Convert your Crypto
              </Link>
              <Link
                className="lg:text-2xl text-center text-md text-white border-2 rounded-md p-2 mb-6 hover:scale-110 duration-500"
                to="/news"
              >
                Check the latest News
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
