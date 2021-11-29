import { Counter } from "./Counter";
import { useState } from "react";
import { useHistory } from "react-router";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoIcon from "@mui/icons-material/Info";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

export function Movie({ name, poster, rating, des, index }) {
  const [show, setShow] = useState(true);
  const history = useHistory();
  // const styles = { display: show ? "block" : "none" };

  return (
    <Card className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />

      <CardContent>
        <div className="movie-info-conatiner">
          <div className="movie-specs">
            <h3 className="movie-name">
              {name}{" "}
              <IconButton
                aria-label="delete"
                color="primary"
                onClick={() => setShow(!show)}
              >
                {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
              <IconButton
                aria-label="info"
                color="primary"
                onClick={() => history.push("/movies/" + index)}
              >
                <InfoIcon />
              </IconButton>
            </h3>

            <p className="movie-rating">
              <span role="img" aria-label="star">
                ⭐
              </span>{" "}
              {rating}
            </p>
          </div>

          {/* =============================================================================== */}
          {/* <Button
          variant="contained"
          color="success"
          style={{ marginBottom: "10px" }}
          onClick={() => setShow(!show)}
        >
          {show ? "Hide" : "show"} description
        </Button> */}
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
      </CardContent>
    </Card>
  );
}
