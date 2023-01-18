import { useState } from "react";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import moviesFromJson from "./data/movies.json"

function App() {
  // use useState to update
  const [moviesArr, setMovies] = useState(moviesFromJson);
  const [title, setTitle]= useState("");
  const [rating, setRating]= useState("");
  const [imgURL, setImgURL]= useState("")

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

  const handleSubmit = (event) => {
    //prevent the page auto refresh once the user submit,
    event.preventDefault();
    const newMovie = {
      "title" : title,
      "rating": rating,
      "imgURL":imgURL
      //left side should be the same like the name in form
      //the right side should be the same like in useState()
    }

    setMovies((prevListOfMovies) => {
      const newList = [newMovie, ...prevListOfMovies]
      return newList;
    });
    //clear form
    setTitle("");
    setRating("");
    setImgURL("")
  }

  return (
    <div className="App">
      <Header moviesArr={moviesArr} />

      <form onSubmit={handleSubmit}>
        <label> Title
          <input
            type="text"
            name="title"
            required={true}
            placeholder="Enter the title"
            value={title}
            onChange={(event) => { setTitle(event.target.value) }}
          />
        </label>
        <label> Rating
          <input
            type="number"
            name="rating"
            required={true}
            placeholder="5"
            value={rating}
            onChange={(event) => { setRating(event.target.value) }}
          />
        </label>
        <label> ImgURL
          <input
            type="url"
            name="imgURL"
            // required="false"
            placeholder="image url" 
            value={imgURL}
            onChange={(event) => { setImgURL(event.target.value) }}
          />
        </label>
        <button>Create</button>
      </form>




      <Main sortRatingAscend={sortRatingAscend} sortRatingDescend={sortRatingDescend} deletMovie={deletMovie} moviesArr={moviesArr} />
      <Footer />
    </div>

  );
}

export default App;
