import { useState } from "react";
import { useHistory, useParams } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function EditMovie({ initalmovie, setMovie }) {
  const { mid } = useParams(); // to get the click movie index
  const ini_movie = initalmovie[mid];
  // console.log(ini_movie);
  // console.log(ini_movie.name);
  const [name, setName] = useState(ini_movie.name);
  const [poster, setPoster] = useState(ini_movie.poster);
  const [summary, setSummary] = useState(ini_movie.summary);
  const [rating, setRating] = useState(ini_movie.rating);
  const [trailer, setTrailer] = useState(ini_movie.trailer);

  const history = useHistory(); // going to next page

  const editMoive = () => {
    // console.log(name, poster, summary, rating, trailer);
    // console.log({ name, poster, summary, rating, trailer });
    const updatedMovie = {
      name,
      poster,
      summary,
      rating,
      trailer,
    };
    // ======= for AddMovie ======
    //copy of movie and then add the new movie to it
    // setMovie([...initalmovie, updatedMovie]);
    //======================================================
    // ======= for EditMovie ======
    //copy of the movie and replace the updated movie in it
    //const copyMovies =[...initalmovie]
    //copyMovies[id] = updatedMovie
    //setMovie(copyMovies);

    // const copyMovies = [...initalmovie];
    const copyMovies = initalmovie;
    console.log(initalmovie);
    console.log("initalmovies", [...initalmovie]);
    copyMovies[mid] = updatedMovie;
    console.log(" copyMovies[mid]", copyMovies[mid]);
    setMovie(copyMovies);

    history.push("/movies");
  };
  return (
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
          label="Movie Summary"
          variant="outlined"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Movie Rating"
          variant="outlined"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Movie Trailer"
          variant="outlined"
          value={trailer}
          onChange={(event) => setTrailer(event.target.value)}
        />

        <Button variant="contained" color="success" onClick={editMoive}>
          Edit movie
        </Button>
      </div>

      {/* <button onClick={addMoive}>Add Movie</button> */}
      {/* <AddColorBox /> */}

      {/* important */}
      {/* <MovieList movie={initalmovie} /> */}
    </div>
  );
}
