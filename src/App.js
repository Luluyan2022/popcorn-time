import { useState } from "react";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import moviesFromJson from "./data/movies.json"

function App() {
  // use useState to update
  const [moviesArr, setMovies] = useState(moviesFromJson);


  // here moviesFromJson is initial value we need to update(remove the element from original array to have the delete effect)
  const deletMovie = (idOfTheMovieToDelete) => {
    const newListOfMovies = moviesArr.filter((movie) => {
      return movie.id !== idOfTheMovieToDelete;
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

  const handleSubmit = (event) => {
    //prevent the user submit,the page auto refresh
    event.preventDefault();

  }

  return (
    <div className="App">
      <Header moviesArr={moviesArr} />
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Enter the title" />
        <button>Create</button>
      </form>




      <Main sortRatingAscend={sortRatingAscend} sortRatingDescend={sortRatingDescend} deletMovie={deletMovie} moviesArr={moviesArr} />
      <Footer />
    </div>

  );
}

export default App;
