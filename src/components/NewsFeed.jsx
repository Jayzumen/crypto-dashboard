import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/news",
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setArticles(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const firstArticles = articles?.slice(0, 10);

  return (
    <div className="w-screen h-screen ">
      <div className="pt-32 text-center leading-8">
        <h1 className="mb-12 mt-10 text-4xl font-bold underline">
          Newest Crypto Articles
        </h1>
        <h2 className="text-2xl font-bold mb-10">
          Check out the articles below
        </h2>
        {firstArticles?.map((article, _index) => (
          <div key={_index} className="m-4">
            <a href={article.url} target="_blank" rel="noreferrer">
              <p className="text-xl hover:text-gray-400 duration-300">
                {article.title}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
