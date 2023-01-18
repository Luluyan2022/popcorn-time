export default function Movie(props){

    //  const deletMovie= props.deletMovie
     
  return (
      <div  className="card movie">
          <p>{props.movie.title}</p>

          {/* Conditional Rendering with "Ternary Operator" */}

          {props.movie.imgURL
              ? <img src={props.movie.imgURL} alt="" />
              : <img src="https://via.placeholder.com/182x268" alt="" />
          }

          <p>Rating: {props.movie.rating}</p>

          {/* Conditional Rendering with "Logical && Operator" */}
          {props.movie.rating > 8 && <p className="badge">RECOMMENDED</p>}

          <p>Year: {props.movie.year}</p>
          {/* <p>Genres: {props.movie.genres.map((genre) => <li>{genre}</li>)}</p> */}
          <button onClick={() => props.deletMovie(props.movie.id)}>Delete this movie</button>
          {/* we need to put the method in an anonymous arrow function to prevent the function auto excuted right now  */}
      </div>
  )
}