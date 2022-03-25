import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies, fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText))
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
