import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./header.css";

function Header() {
  const [Movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchTrending);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * (req.data.results.length - 1))
        ]
      );
      return req;
    }
    fetchData();
  }, []);

  function truncateText(str, n) {
    //truncate the text
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="header"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${Movie.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div>
        <h1 className="header_moviename">
          {Movie.name || Movie.title || Movie.original_name}
        </h1>
        <h4 className="header_movieoverview">
          {truncateText(Movie.overview, 150)}
        </h4>
      </div>
    </div>
  );
}

export default Header;
