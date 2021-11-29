import { Movie } from "./Movie";

export function MovieList({ movie }) {
  return (
    <div>
      <section className="movie-list">
        {movie.map(({ name, poster, rating, summary }, index) => (
          <Movie
            name={name}
            poster={poster}
            rating={rating}
            des={summary}
            index={index}
          />
        ))}
      </section>
    </div>
  );
}
