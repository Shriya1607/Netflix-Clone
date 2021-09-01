import axios from "./axios.js";
import React, { useEffect, useState } from "react";

function MovieRow(props) {
  const url = "https://image.tmdb.org/t/p/original/";
  const [Movies, SetMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(
        props.fetch_URL
      ); /*fetching data from the url which is passed as a prop */
      SetMovies(req.data.results); /* assigning value to the movie array*/
      return req;
    }
    fetchData();
  }, [
    props.fetch_URL /* whenever url changes the useEffect will run*/,
  ]); /* useEffect is a react hook, it is used to do something after every render(display)
  []-> if this is empty then use effect is called only once but if we write any variable then when the value of that variable changes then useState is called
  asynch/await means the function will take its own time to run */
  return (
    <div className="movierow">
      <h2>{props.title}</h2>
      <div className="movierow_thumbnail">
        {Movies.map((m) => {
          return <img src={m.poster_path} alt="" />;
        })}
      </div>
    </div>
  );
}

export default MovieRow;
