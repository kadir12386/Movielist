import { useParams, useHistory } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useState } from "react";
export function MovieDetails() {
  const history = useHistory();
  const { id } = useParams();
  // console.log(movie);
  // const ini_movie = movie[id];
  // console.log(ini_movie);
  // // if(id.length )
  // console.log(movie.length);
  // if (movie.length < id) {
  //   history.push("/movies/abc");
  // }
  const [ini_movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`https://614ed775b4f6d30017b483a0.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, []);
  // console.log("ini_movie", ini_movie);
  return (
    <div>
      <h1>Movie Details {id}</h1>
      <div className="movie-info-conatiner">
        <iframe
          width="100%"
          height="500px"
          src={ini_movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        {/* <section className="movie-info-section"> */}
        <section className="movie-info-section">
          <div className="movie-specs">
            <h3 className="movie-name">{ini_movie.name}</h3>

            <p className="movie-rating">
              <span role="img" aria-label="star">
                ⭐
              </span>{" "}
              {ini_movie.rating}
            </p>
          </div>
          <p className="">{ini_movie.des}</p>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => history.goBack()}
          >
            Back
          </Button>

          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => history.goForward()}
          >
            Forward
          </Button>
        </section>
      </div>

      {/* </section> */}
    </div>
  );
}
