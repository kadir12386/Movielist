import { useState } from "react";
import { useParams } from "react-router";
import "./App.css";
import { MovieList } from "./MovieList";
import { INITAIL_MOVIES } from "./INITAIL_MOVIES";
import { AddColorBox } from "./AddColorBox";
import TextField from "@mui/material/TextField";
import { Link, Switch, Route, Redirect } from "react-router-dom";

// Material import
import Button from "@mui/material/Button";
export default function App() {
  const [initalmovie, setMovie] = useState(INITAIL_MOVIES);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");

  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setSummary("");
    setRating("");
  };

  const addMoive = () => {
    console.log(name, poster, summary, rating);
    console.log({ name, poster, summary, rating });
    const newmovie = {
      name,
      poster,
      summary,
      rating,
    };

    setMovie([...initalmovie, newmovie]);
    // console.log([...initalmovie, newmovie]);
    resetMovieForm();
  };
  return (
    <section>
      {/* Header */}
      <ul>
        <li>
          <Link to="/"> Home</Link>
          <Link to="/movies"> Movies</Link>
          <Link to="/color"> Color-Games</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          {" "}
          Welcome
        </Route>
        <Route path="/films">
          <Redirect to="/movies" />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails movie={initalmovie} />
        </Route>
        <Route path="/abc">
          <Redirect to="/movies" />
        </Route>

        <Route path="/movies">
          {" "}
          <div className="App">
            <div className="add-movie-form">
              <TextField
                id="outlined-basic"
                label="Movie name"
                variant="outlined"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Movie Poster"
                variant="outlined"
                value={poster}
                onChange={(event) => setPoster(event.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Movie summary"
                variant="outlined"
                value={summary}
                onChange={(event) => setSummary(event.target.value)}
              />

              <TextField
                id="outlined-basic"
                label="Movie summary"
                variant="outlined"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
              />

              <Button variant="contained" onClick={addMoive}>
                Add Movie
              </Button>
            </div>

            {/* <button onClick={addMoive}>Add Movie</button> */}
            {/* <AddColorBox /> */}

            {/* important */}
            <MovieList movie={initalmovie} />
          </div>
        </Route>
        <Route path="/color">
          <AddColorBox />
        </Route>
        <Route path="**">
          {" "}
          <NotFound />
        </Route>
      </Switch>
    </section>
  );
}

function NotFound() {
  const style = { width: "100%", height: "600px", objectFit: "cover" };
  return (
    <div>
      <img
        style={style}
        src="https://flothemes.com/wp-content/uploads/2017/06/best-404-page-design5.png"
        alt="NotFound"
      />
    </div>
  );
}

function MovieDetails({ movie }) {
  const { id } = useParams();
  console.log(movie);
  const ini_movie = movie[id];
  console.log(ini_movie);
  return (
    <div>
      <h1>Movie Details {id}</h1>
      <div className="movie-info-conatiner">
        <iframe
          width="100%"
          height="400"
          src={ini_movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="movie-specs">
          <h3 className="movie-name">{ini_movie.name}</h3>

          <p className="movie-rating">
            <span role="img" aria-label="star">
              ⭐
            </span>{" "}
            {ini_movie.rating}
          </p>
        </div>
        <p className="">{ini_movie.summary}</p>
      </div>
    </div>
  );
}
