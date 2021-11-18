import { Counter } from "./Counter";
import { useState } from "react";
import Button from "@mui/material/Button";
export function Movie({ name, poster, rating, des }) {
  const [show, setShow] = useState(true);
  // const styles = { display: show ? "block" : "none" };

  return (
    <div className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <div className="movie-info-conatiner">
        <div className="movie-specs">
          <h3 className="movie-name">{name}</h3>
          <p className="movie-rating">
            <span role="img" aria-label="star">
              ⭐
            </span>{" "}
            {rating}
          </p>
        </div>
        <Button
          variant="contained"
          color="success"
          style={{ marginBottom: "10px" }}
          onClick={() => setShow(!show)}
        >
          {show ? "Hide" : "show"} description
        </Button>
        {/* =============================================================================== */}
        {/* <button style={{ marginBottom: "10px" }} onClick={() => setShow(!show)}>
          {show ? "Hide" : "show"} description
        </button> */}
        {/* =============================================================================== */}
        {/* conditional rendering */}
        {/* <p style={styles} className="movie-summary">
          {des}
        </p> */}
        {show ? <p className="movie-summary">{des}</p> : " "}
        <Counter />
      </div>
    </div>
  );
}
