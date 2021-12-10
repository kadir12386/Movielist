import { useEffect, useState } from "react";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
import Badge from "@mui/material/Badge";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  const incrementDislike = () => setDisLike(dislike + 1);

  useEffect(() => {
    console.log("the updated like value is", like);
  }, [like]);
  // const like = 0;
  return (
    // <div>
    //   <button onClick={() => setLike(like+1)}>Like</button>
    //   <p>{like}</p>
    // </div>
    <div className="counter-container">
      {/* <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton> */}

      <Badge
        badgeContent={like}
        color="primary"
        aria-label="like"
        onClick={incrementLike}
      >
        <ThumbUpIcon color="action" />
      </Badge>

      <Badge
        badgeContent={dislike}
        color="error"
        aria-label="dislike"
        onClick={incrementDislike}
      >
        <ThumbDownIcon color="action" />
      </Badge>
      {/* <button>
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
      </button> */}
    </div>
  );
}
