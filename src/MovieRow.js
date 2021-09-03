import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./movierow.css";

function MovieRow({ title, fetch_URL }) {
  const url = "https://image.tmdb.org/t/p/original/";
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(
        fetch_URL
      ); /*fetching data from the url which is passed as a prop */
      setMovies(req.data.results); /* assigning value to the movie array*/
      return req;
    }
    fetchData();
  }, [
    fetch_URL /* whenever url changes the useEffect will run*/,
  ]); /* useEffect is a react hook, it is used to do something after every render(display)
  []-> if this is empty then use effect is called only once but if we write any variable then when the value of that variable changes then useState is called
  asynch/await means the function will take its own time to run */
  console.log(Movies);
  return (
    <div className="movierow">
      <h2>{title}</h2>
      <div className="movierow_thumbnail">
        {Movies.map((mov) => {
          return (
            <img
              key={mov.id}
              src={`${url}${mov.poster_path}`}
              alt={mov.name}
              className="movierow_image"
            />
          );
        })}
      </div>
    </div>
  );
}

export default MovieRow;
