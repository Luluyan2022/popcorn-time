import moviesFromJson from "../data/movies.json"
import "./Main.css"
import { useState } from "react";

function Main(){
    //use useState to update
    const [moviesArr, setMovies] = useState(moviesFromJson);

    // here moviesFromJson is initial value we need to update(remove the element from original array to have the delete effect)
    const deletMovie = (idOfTheMovieToDelete) => {
        const newListOfMovies = moviesArr.filter((movie) => {
            return movie.id !== idOfTheMovieToDelete;
        });
        setMovies(newListOfMovies)
        // pass the updated value to setMovies to update
    }

// Conditional Rendering with "Element Variables", together with line 30
    let titleMessage;
    if(moviesArr.length > 0){
      titleMessage = <h2>Current number of movies: {moviesArr.length}</h2>;
    } else {
      titleMessage = <h2>Sorry, no movies to display</h2>
    }

   
    return (
        <div className="Main">
            
            {titleMessage}
            {moviesArr.map((movieDetails) => {
                return(
                    <div key={movieDetails.id} className="card movie">
                        <p>{movieDetails.title}</p>

                        {/*  Conditional Rendering with "Ternary Operator"  */}
                        
                        {movieDetails.imgURL
                            ? <img src={movieDetails.imgURL} alt="" />
                            : <img src="https://via.placeholder.com/182x268" />
                        }

                        <p>Rating: {movieDetails.rating}</p>

                        {/*  Conditional Rendering with "Logical && Operator"  */}
                        {movieDetails.rating > 8 && <p className="badge">RECOMMENDED</p>}

                        <p>Year: {movieDetails.year}</p>
                        <p key={movieDetails.id}>Genres: {movieDetails.genres.map((genre) => <li>{genre}</li>)}</p>
                        <button onClick={() => deletMovie(movieDetails.id)}>Delete this movie</button>
                        {/* we need to put the method in an anonymous arrow function to prevent the function auto excuted right now */}
                    </div>
                );
            })}
        </div>
    )
}

export default Main;