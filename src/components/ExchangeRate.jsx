import React from "react";

const ExchangeRate = ({ exchangedData }) => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-3xl my-2">Exchange Rate:</h1>
        <p className="text-3xl text-white my-3 font-bold">
          {exchangedData.exchangeRate}
        </p>
        <p className="text-2xl my-2">
          {exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}
        </p>
      </div>
    </div>
  );
};

export default ExchangeRate;
