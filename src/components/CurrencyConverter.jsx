import React, { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETC", "EUR", "XRP", "LTC", "ADA"];
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
      url: "http://localhost:8000/convert",
      params: {
        from_currency: chosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryCurrency,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setResult(response.data * amount);
        setExchangedData({
          primaryCurrency: chosenPrimaryCurrency,
          secondaryCurrency: chosenSecondaryCurrency,
          exchangeRate: response.data,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="w-full h-screen">
      <div className="pt-20 flex flex-col flex-wrap justify-center">
        <h2 className="mt-32 mb-10 text-center text-4xl font-bold underline">
          Currency Converter
        </h2>
        <div className="mx-auto px-2">
          <table className="mx-2">
            <tbody>
              <tr>
                <td className="text-xl">Primary Currency</td>
                <td>
                  <input
                    className="p-2 border-none rounded-md bg-gray-600 mx-4 my-2 text-xl"
                    type="number"
                    name="currency-amount-1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </td>
                <td>
                  <select
                    className="text-xl p-2 rounded-md bg-gray-700 text-white font-bold"
                    name="currency-option-1"
                    value={chosenPrimaryCurrency}
                    onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                  >
                    {currencies.map((currency, _index) => (
                      <option key={_index}>{currency}</option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td className="text-xl">Secondary Currency</td>
                <td>
                  <input
                    className="p-2 border-none rounded-md bg-gray-600 mx-4 my-2 text-xl"
                    type="number"
                    name="currency-amount-2"
                    value={result}
                    disabled
                  />
                </td>
                <td>
                  <select
                    className="text-xl p-2 rounded-md bg-gray-700 text-white font-bold"
                    name="currency-option-2"
                    value={chosenSecondaryCurrency}
                    onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                  >
                    {currencies.map((currency, _index) => (
                      <option key={_index}>{currency}</option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
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
