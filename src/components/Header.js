import "./Header.css"

function Header(props) {
  // Conditional Rendering with "Element Variables", together with line 30
  let titleMessage;
  if (props.moviesArr.length > 0) {
    titleMessage = <h2>Current number of movies: {props.moviesArr.length}</h2>;
  } else {
    titleMessage = <h2>Sorry, no movies to display</h2>
  }
  return (
    <div className="Header">
      <h1> {titleMessage}</h1>
    </div>
  )
}

export default Header;