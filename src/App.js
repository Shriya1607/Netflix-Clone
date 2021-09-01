import React from "react";
import "./App.css";
import MovieRow from "./MovieRow";
import Navbar from "./Navbar";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieRow
        title="NETFLIX ORIGINALS"
        fetch_URL={requests.fetchNetflixOriginals}
      />
    </div>
  );
}

export default App;
