import { useState } from "react";
import { useHistory } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function AddMoive({ initalmovie, setMovie }) {
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
  const history = useHistory();
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
      {/* <MovieList movie={initalmovie} /> */}
    </div>
  );
}
