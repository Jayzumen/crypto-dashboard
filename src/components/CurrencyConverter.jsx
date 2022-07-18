import React, { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETC", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(1);
  const [exchangedData, setExchangedData] = useState({
    primaryCurrency: "BTC",
    secondaryCurrency: "BTC",
    exchangeRate: 0,
  });
  const [result, setResult] = useState(0);

  const convert = () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: chosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryCurrency,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
            amount
        );
        setExchangedData({
          primaryCurrency: chosenPrimaryCurrency,
          secondaryCurrency: chosenSecondaryCurrency,
          exchangeRate:
            response.data["Realtime Currency Exchange Rate"][
              "5. Exchange Rate"
            ],
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="w-full h-screen">
      <div className="pt-20 flex flex-col flex-wrap justify-center">
        <h2 className="mt-20 mb-10 text-center text-4xl font-bold underline">
          Crypto Converter
        </h2>
        <div className="mx-auto">
          <div className="flex flex-col flex-wrap justify-center text-center">
            <div>
              <p className="text-xl text-center mt-8 mb-4">
                Currency to convert
              </p>
              <input
                className="p-2 border-none rounded-md bg-gray-500 mx-4 my-2 text-xl"
                type="number"
                name="currency-amount-1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <select
                className="text-xl p-2 rounded-md bg-gray-600 text-white font-bold cursor-pointer"
                name="currency-option-1"
                value={chosenPrimaryCurrency}
                onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
              >
                {currencies.map((currency, _index) => (
                  <option key={_index}>{currency}</option>
                ))}
              </select>
            </div>

            <div>
              <p className="text-xl text-center mt-8 mb-4">
                Converted Currency
              </p>
              <input
                className="p-2 border-none rounded-md bg-gray-500 mx-4 my-2 text-xl"
                type="number"
                name="currency-amount-2"
                value={result}
                disabled
              />
              <select
                className="text-xl p-2 rounded-md bg-gray-600 text-white font-bold cursor-pointer"
                name="currency-option-2"
                value={chosenSecondaryCurrency}
                onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
              >
                {currencies.map((currency, _index) => (
                  <option key={_index}>{currency}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              className="m-4 border-4 rounded-md py-3 px-6 text-xl font-bold text-white hover:scale-110 duration-500"
              onClick={convert}
            >
              Convert
            </button>
          </div>
        </div>
        <div>
          <ExchangeRate exchangedData={exchangedData} />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
