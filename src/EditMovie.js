import { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//PUT => Get + Post.
//HOC => higher oreder Component.. parent(will handel the Data part) and child( will handel the display part)
export function EditMovie() {
  const { mid } = useParams(); // to get the click movie index
  // const ini_movie = initalmovie[mid];
  // console.log(ini_movie);
  // console.log(ini_movie.name);

  const [ini_movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`https://614ed775b4f6d30017b483a0.mockapi.io/movies/${mid}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, []);

  //updateMovies is child ... is hanliding the display part...
  return ini_movie ? <UpdateMovies ini_movie={ini_movie} /> : "";
}

function UpdateMovies({ ini_movie }) {
  const history = useHistory(); // going to next page
  const [name, setName] = useState(ini_movie.name);
  const [pic, setPoster] = useState(ini_movie.pic);
  const [des, setSummary] = useState(ini_movie.des);
  const [rating, setRating] = useState(ini_movie.rating);
  const [trailer, setTrailer] = useState(ini_movie.trailer);

  const editMoive = () => {
    // console.log(name, poster, summary, rating, trailer);
    // console.log({ name, poster, summary, rating, trailer });
    const updatedMovie = {
      name,
      pic,
      des,
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
    // const copyMovies = initalmovie;
    // console.log(initalmovie);
    // console.log("initalmovies", [...initalmovie]);
    // copyMovies[mid] = updatedMovie;
    // console.log(" copyMovies[mid]", copyMovies[mid]);
    // setMovie(copyMovies);

    //adding 3 steps
    //1.method : Put and id (which movie your editing)
    //2.body - data & JSON
    //3.header-JSON data

    fetch(
      `https://614ed775b4f6d30017b483a0.mockapi.io/movies/${ini_movie.id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedMovie),
        headers: { "Content-type": "application/json" },
      }
    ).then(() => history.push("/movies"));
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
