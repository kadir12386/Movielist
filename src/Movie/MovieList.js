import { Movie } from "./Movie";
import { useHistory } from "react-router";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useEffect } from "react";
export function MovieList() {
  // {
  //   movie, setMovie;
  // }
  const history = useHistory();
  const [movie, setMovie] = useState([]);
  const getMovies = () => {
    fetch("https://614ed775b4f6d30017b483a0.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  };
  useEffect(getMovies, []);
  const removeMovie = (id) => {
    // console.log(index);
    // const removeMovieIndex = index;
    // // console.log(reminingindex);
    // const reminingmovies = movie.filter((mv, idx) => idx !== removeMovieIndex);
    // console.log(
    //   reminingmovies,
    //   " movie",
    //   movie,
    //   "reminingindex",
    //   removeMovieIndex
    // );
    // setMovie(reminingmovies);
    //after delete we need to refresh the movielist
    fetch(`https://614ed775b4f6d30017b483a0.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };
  return (
    <div>
      <section className="movie-list">
        {movie.map(({ name, pic, rating, des, id }) => (
          <Movie
            name={name}
            poster={pic}
            rating={rating}
            des={des}
            id={id}
            deleteButton={
              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => removeMovie(id)}
              >
                <DeleteIcon />

                {/* <button onClick={() => removeMovie(index)}>Delete</button> */}
              </IconButton>
            }
            editButton={
              <IconButton
                style={{ marginLeft: "auto" }}
                aria-label="delete"
                color="success"
                onClick={() => history.push("/movie/edit/" + id)}
              >
                <EditIcon />

                {/* <button onClick={() => removeMovie(index)}>Delete</button> */}
              </IconButton>
            }
          />
        ))}
      </section>
    </div>
  );
}
//...... /movie/edit/:id
