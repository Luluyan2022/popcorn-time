
import "./Main.css"
import Movie from "./Movie";

function Main(props){ 
    return (       
          
            <div className="Main">
                <button onClick={props.sortRatingAscend}>Rating ascending</button>
                <button onClick={props.sortRatingDescend}>Rating Descending</button>
               
                {props.moviesArr.map((movieDetails,index) => {
                    return (

                        <Movie key={index} movie={movieDetails} deletMovie={props.deletMovie} />
                    );
                })}
            </div>       
    )
}

export default Main;