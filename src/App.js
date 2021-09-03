import React from "react";
import "./App.css";
import Header from "./Header";
import MovieRow from "./MovieRow";
import Navbar from "./Navbar";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <MovieRow
        title="NETFLIX ORIGINALS"
        fetch_URL={requests.fetchNetflixOriginals}
      />
      <MovieRow title="TRENDING" fetch_URL={requests.fetchTrending} />
      <MovieRow title="TOP RATED" fetch_URL={requests.fetchTopRated} />
      <MovieRow title="ACTION MOVIES" fetch_URL={requests.fetchActionMovies} />
      <MovieRow title="COMEDY MOVIES" fetch_URL={requests.fetchComedyMovies} />
      <MovieRow title="HORROR MOVIES" fetch_URL={requests.fetchHorrorMovies} />
      <MovieRow
        title="ROMANCE MOVIES"
        fetch_URL={requests.fetchRomanceMovies}
      />
      <MovieRow title="DOCUMENTARIES" fetch_URL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
