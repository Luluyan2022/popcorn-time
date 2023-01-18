import { useState } from "react";
export default function AddMovie(props){
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [imgURL, setImgURL] = useState("")
    const handleSubmit = (event) => {
        //prevent the page auto refresh once the user submit,
        event.preventDefault();
        const newMovie = {
            "title": title,
            "rating": rating,
            "imgURL": imgURL
            //left side should be the same like the name in form
            //the right side should be the same like in useState()
        }

        props.setMovies((prevListOfMovies) => {
            const newList = [newMovie, ...prevListOfMovies]
            return newList;
        });
        //clear form
        setTitle("");
        setRating("");
        setImgURL("")
      }
    return(
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
    )
}