import { useState } from "react";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import moviesFromJson from "./data/movies.json"
import AddMovie from "./components/AddMovie"

function App() {
  // use useState to update
  const [moviesArr, setMovies] = useState(moviesFromJson);
  

  // here moviesFromJson is initial value we need to update(remove the element from original array to have the delete effect)
  const deletMovie = (movieTitle) => {
    const newListOfMovies = moviesArr.filter((movie) => {
      return movie.title !== movieTitle;
    });
    setMovies(newListOfMovies)
    // pass the updated value to setMovies to update
  }

  const sortRatingDescend = () => {
    setMovies((preMovieArr) => {
      const moviesArrCopy = [...preMovieArr];
      const newArr = moviesArrCopy.sort((a, b) => {
        return b.rating - a.rating
      })
      return newArr;
    })
  }

  const sortRatingAscend = () => {
    setMovies((preMovieArr) => {
      const moviesArrCopy = [...preMovieArr];
      const newArr = moviesArrCopy.sort((a, b) => {
        return a.rating - b.rating
      })
      return newArr;
    })
  }

  

  return (
    <div className="App">
      <Header moviesArr={moviesArr} />
      <AddMovie setMovies={setMovies} /> 
      <Main sortRatingAscend={sortRatingAscend} sortRatingDescend={sortRatingDescend} deletMovie={deletMovie} moviesArr={moviesArr} />
      <Footer />
    </div>

  );
}

export default App;
