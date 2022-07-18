import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Link } from "react-router-dom";

const TopCrypto = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  useEffect(() => {
    setLoading(true);

    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        // console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [url]);

  return (
    <div className="h-full w-full">
      <div className="pt-20 items-center text-center mx-auto">
        {/* <p>Top Trending Crypto</p> */}
        <div className="flex flex-col justify-center mx-auto w-[90%] mt-10">
          <div className="flex justify-between w-full bg-slate-600 rounded-md p-4 mx-auto">
            <p className="text-2xl text-white text-center">Search Crypto</p>
            <form>
              <input
                className="bg-slate-800 w-[100px] sm:w-[300px] text-white rounded-md ml-10 p-2"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search a coin..."
              />
            </form>
          </div>

          {loading && "Loading Crypto Data..."}

          <table className="mt-6 w-full text-center mb-4 bg-slate-800 text-white">
            {/* Table Header */}
            <thead>
              <tr className="text-lg border-b">
                <th className="px-4">#</th>
                <th className="text-left">Coin</th>
                <th></th>
                <th>Price</th>
                <th className="hidden md:table-cell">24h</th>
                <th className="hidden lg:table-cell">24h Volume</th>
                <th className="hidden lg:table-cell">Mkt Volume</th>
                <th>Last 7 Days</th>
              </tr>
            </thead>

            {/* Table Body */}

            <tbody>
              {/* Mapping through coins */}
              {coins
                .filter((value) => {
                  if (search === "") {
                    return value;
                  } else if (
                    value.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((coin) => (
                  <tr
                    className="h-[80px] border-b overflow-hidden"
                    key={coin.market_cap_rank}
                  >
                    <td>{coin.market_cap_rank}</td>
                    <td>
                      <Link to={`/coin/${coin.id}`}>
                        <div className="flex items-center">
                          <img
                            className="w-6 mr-2 rounded-full"
                            src={coin.image}
                            alt={coin.id}
                          />
                          <p className="hidden sm:table-cell">{coin.name}</p>
                        </div>
                      </Link>
                    </td>
                    <td className="uppercase p-2">{coin.symbol}</td>
                    <td>${coin.current_price.toLocaleString()}</td>
                    <td className="w-[120px] hidden md:table-cell">
                      {coin.price_change_percentage_24h > 0 ? (
                        <p className="text-green-600">
                          {coin.price_change_percentage_24h}
                        </p>
                      ) : (
                        <p className="text-red-600">
                          {coin.price_change_percentage_24h}
                        </p>
                      )}
                    </td>
                    <td className="w-[120px] hidden lg:table-cell px-2">
                      ${coin.total_volume.toLocaleString()}
                    </td>
                    <td className="hidden lg:table-cell px-2">
                      ${coin.market_cap.toLocaleString()}
                    </td>
                    <td>
                      <Sparklines data={coin.sparkline_in_7d.price}>
                        <SparklinesLine color="teal" />
                      </Sparklines>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopCrypto;
