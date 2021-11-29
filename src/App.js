import { useState } from "react";
import "./App.css";
import { MovieList } from "./Movie/MovieList";
import { INITAIL_MOVIES } from "./Movie/INITAIL_MOVIES";
import { AddColorBox } from "./color/AddColorBox";

// Material ui link
import { Link, Switch, Route, Redirect } from "react-router-dom";

// Material import
import { MovieDetails } from "./Movie/MovieDetails";
import { NotFound } from "./Movie/NotFound";
import { AddMoive } from "./AddMoive";
export default function App() {
  const [initalmovie, setMovie] = useState(INITAIL_MOVIES);

  return (
    <section>
      {/* Header */}
      <ul>
        <li>
          <Link to="/"> Home</Link>
          <Link to="/movies"> Movies</Link>
          <Link to="/movies/add">Add Movie</Link>
          <Link to="/color"> Color-Games</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          {" "}
          Welcome
        </Route>
        <Route path="/films">
          <Redirect to="/movies" />
        </Route>
        <Route path="/movies/add">
          <AddMoive initalmovie={initalmovie} setMovie={setMovie} />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails movie={initalmovie} />
        </Route>

        {/* <Route path="/abc">
          <Redirect to="/movies" />
        </Route> */}

        <Route path="/movies">
          {" "}
          <MovieList movie={initalmovie} />{" "}
        </Route>
        <Route path="/color">
          <AddColorBox />
        </Route>

        <Route path="**">
          {" "}
          <NotFound />
        </Route>
      </Switch>
    </section>
  );
}
