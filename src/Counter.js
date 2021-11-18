import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  const incrementDislike = () => setDisLike(dislike + 1);
  // const like = 0;
  return (
    // <div>
    //   <button onClick={() => setLike(like+1)}>Like</button>
    //   <p>{like}</p>
    // </div>
    <div className="counter-container">
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <button onClick={incrementLike}>
        <span role="img" aria-label="like">
          👍
        </span>{" "}
        {like}
      </button>
      <button onClick={incrementDislike}>
        <span role="img" aria-label="like">
          👎
        </span>{" "}
        {dislike}
      </button>
    </div>
  );
}
