import { useState } from "react";
import { useHistory } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function AddMoive() {
  const [name, setName] = useState("");
  const [pic, setPoster] = useState("");
  const [des, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");
  // const resetMovieForm = () => {
  //   setName("");
  //   setPoster("");
  //   setSummary("");
  //   setRating("");
  //   setTrailer("");
  // };
  const history = useHistory();
  const addMoive = () => {
    console.log(name, pic, des, rating, trailer);
    console.log({ name, pic, des, rating, trailer });
    const newmovie = {
      name,
      pic,
      des,
      rating,
      trailer,
    };

    // setMovie([...initalmovie, newmovie]);
    // // console.log([...initalmovie, newmovie]);
    // resetMovieForm();
    // history.push("/movies");

    //adding 3 steps
    // 1.method : post
    //2.body - data & JSON
    //3.header-JSON data

    fetch("https://614ed775b4f6d30017b483a0.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newmovie),
      headers: { "Content-type": "application/json" },
    }).then(() => history.push("/movies"));
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
          value={pic}
          onChange={(event) => setPoster(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Movie Summary"
          variant="outlined"
          value={des}
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
