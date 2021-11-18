import { useState } from "react";
import "./App.css";
import { MovieList } from "./MovieList";
import Button from "@mui/material/Button";
export default function App() {
  const movie = [
    {
      name: "Avengers: Endgame",
      poster:
        "https://images.moviesanywhere.com/4677177f6f0595289bc3e767e7b47459/1d6c6c73-ab1e-4453-969c-6a4e965ebb37.jpg",
      rating: 8.4,
      summary:
        " After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    },
    {
      name: "Life Of Pi",
      poster: "https://flxt.tmsimg.com/assets/p9227710_p_v10_ai.jpg",
      rating: 9,
      summary:
        " Pi Patel finds a way to survive in a lifeboat that is adrift in the middle of nowhere. His fight against the odds is heightened by the company of a hyena and a male Bengal tiger.",
    },
    {
      name: "M.S. Dhoni",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      rating: 10,
      summary:
        " M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.",
    },
  ];
  const [initalmovie, setMovie] = useState(movie);
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
  };
  return (
    <div className="App">
      <input
        value={name}
        placeholder="Movie name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        value={poster}
        placeholder="Movie Poster"
        onChange={(event) => setPoster(event.target.value)}
      />
      <input
        value={summary}
        placeholder="Movie summary"
        onChange={(event) => setSummary(event.target.value)}
      />
      <input
        value={rating}
        placeholder="Movie rating"
        onChange={(event) => setRating(event.target.value)}
      />
      <Button variant="contained" onClick={addMoive}>
        Add Movie
      </Button>
      {/* <button onClick={addMoive}>Add Movie</button> */}
      {/* <AddColorBox /> */}
      {/* important */}
      <MovieList movie={initalmovie} />
    </div>
  );
}

//color on text and color on inputBox.....
// function AddColorBox() {
//   const colors = ["red", "green", "pink"];
//   const [addcolor, setAddColor] = useState(colors);
//   const [color, setColor] = useState("");
//   const styles = { background: color };
//   const styles_text = { color: color };

//   return (
//     <div>
//       <input
//         className="color_box"
//         style={styles}
//         placeholder="Enter the color"
//         onChange={(event) => setColor(event.target.value)}
//       />
//       <button onClick={() => setAddColor([...addcolor, color])}>
//         Add Color
//       </button>
//       <p className="color_box_text" style={styles_text}>
//         {color}
//       </p>

//       {addcolor.map((el) => (
//         <ColorBox color={el} />
//       ))}
//     </div>
//   );
// }

// function ColorBox({ color }) {
//   const styles = {
//     background: color,
//     height: "120px",
//     width: "200px",
//     marginBottom: "10px",
//   };
//   return <div style={styles}></div>;
// }
