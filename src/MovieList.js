import { Movie } from "./Movie";

export function MovieList({ movie }) {
  return (
    <div>
      <section className="movie-list">
        {movie.map(({ name, poster, rating, summary }) => (
          <Movie name={name} poster={poster} rating={rating} des={summary} />
        ))}
      </section>
    </div>
  );
}
