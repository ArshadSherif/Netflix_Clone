import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import requests from "./Requests";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovie] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function getData() {
      const request = await axios.get(fetchURL);

      setMovie(request?.data.results);

      return request;
    }
    getData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
