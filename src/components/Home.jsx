import React from "react";
import { Link } from "react-router-dom";
import bitcoinVid from "../assets/bitcoin.mp4";

const Home = () => {
  return (
    <div>
      <div>
        {/* Background Video */}
        <div className="pt-20">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full fixed object-cover opacity-40"
          >
            <source src={bitcoinVid} type="video/mp4" />
          </video>
        </div>

        {/* Links and Title */}

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col justify-center flex-wrap">
            <h1 className="text-7xl mb-20 mx-1 text-white">
              Explore the World of Crypto
            </h1>
            <div className="flex flex-col max-w-fit mx-auto mb-4">
              <Link
                className="lg:text-2xl text-center text-md text-white border-2 rounded-md p-2 mb-6 hover:scale-110 duration-500"
                to="/topCrypto"
              >
                Top Crypto
              </Link>
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
    </div>
  );
};

export default Home;
