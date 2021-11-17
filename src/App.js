import { useState } from "react";
import "./App.css";

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
  return (
    <div className="App">
      {/* {movie.map((el) => (
        <Movie
          name={el.name}
          poster={el.poster}
          rating={el.rating}
          des={el.summary}
        /> */}
      <section className="movie-list">
        {movie.map(({ name, poster, rating, summary }) => (
          <Movie name={name} poster={poster} rating={rating} des={summary} />
        ))}
      </section>
    </div>
  );
}

// function Msg({ name, pic }) {
//   return (
//     <div>
//       <img className="profile-pic" src={pic} alt={name} />
//       <h1>{name}</h1>
//     </div>
//   );
// }
function Movie({ name, poster, rating, des }) {
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

        <p className="movie-summary">{des}</p>
        <Counter />
      </div>
    </div>
  );
}
function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  // const like = 0;
  return (
    // <div>
    //   <button onClick={() => setLike(like+1)}>Like</button>
    //   <p>{like}</p>
    // </div>
    <div className="counter-container">
      <button onClick={() => setLike(like + 1)}>
        <span role="img" aria-label="like">
          👍
        </span>{" "}
        {like}
      </button>
      <button onClick={() => setDisLike(dislike + 1)}>
        <span role="img" aria-label="like">
          👎
        </span>{" "}
        {dislike}
      </button>
    </div>
  );
}
