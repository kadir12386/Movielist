import { useState } from "react";
import "./App.css";
import { MovieList } from "./Movie/MovieList";
// import { INITAIL_MOVIES } from "./Movie/INITAIL_MOVIES";
import { AddColorBox } from "./color/AddColorBox";
import { useHistory } from "react-router";
// Material ui link
import { Switch, Route, Redirect } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
// Material import
import { MovieDetails } from "./Movie/MovieDetails";
import { NotFound } from "./Movie/NotFound";
import { AddMoive } from "./AddMoive";
import { EditMovie } from "./EditMovie";
import { useEffect } from "react";
import { BasicForm } from "./BasicForm";

export default function App() {
  const history = useHistory();
  // const [initalmovie, setMovie] = useState(INITAIL_MOVIES);
  const [initalmovie, setMovie] = useState([]);
  const [mode, setMode] = useState("dark");

  // 1.creating context
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const paperstyle = {
    minHeight: "100vh",
  };
  useEffect(() => {
    fetch("https://614ed775b4f6d30017b483a0.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, []);
  //===========================using the async and await ======================
  // useEffect(() => {
  //   async function getdata() {
  //     const data = await fetch(
  //       "https://614ed775b4f6d30017b483a0.mockapi.io/movies",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const mvs = await data.json();
  //     setMovie(mvs);
  //   }
  //   getdata();
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={6} variant="outlined" square style={paperstyle}>
        <section>
          {/* Header */}
          {/* <ul>
        <li>
          <Link to="/"> Home</Link>
          <Link to="/movies"> Movies</Link>
          <Link to="/movies/add">Add Movie</Link>
          <Link to="/color"> Color-Games</Link>
        </li>
      </ul> */}

          <AppBar position="static">
            <Toolbar>
              <Button
                size="large"
                color="inherit"
                aria-label="home"
                startIcon={<HomeIcon />}
                onClick={() => history.push("/")}
              >
                Home
              </Button>
              <Button
                size="large"
                color="inherit"
                aria-label="movies"
                startIcon={<LocalMoviesIcon />}
                onClick={() => history.push("/movies")}
              >
                Movies
              </Button>
              <Button
                size="large"
                color="inherit"
                aria-label="Add Movie"
                startIcon={<AddCircleIcon />}
                onClick={() => history.push("/movies/add")}
              >
                Add Movie
              </Button>
              <Button
                size="large"
                color="inherit"
                aria-label="Color-Game"
                startIcon={<ColorLensIcon />}
                onClick={() => history.push("/color")}
              >
                Color-Game
              </Button>
              <Button
                size="large"
                color="inherit"
                aria-label="Color-Game"
                startIcon={<TextSnippetIcon />}
                onClick={() => history.push("/basic-form")}
              >
                Basic Form
              </Button>

              <Button
                style={{ marginLeft: "auto" }}
                size="large"
                color="inherit"
                aria-label="Color-Game"
                startIcon={
                  mode === "light" ? <DarkModeIcon /> : <Brightness7Icon />
                }
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} Mode
              </Button>
            </Toolbar>
          </AppBar>

          <Switch>
            <Route exact path="/">
              {" "}
              Welcome
            </Route>
            <Route path="/films">
              <Redirect to="/movies" />
            </Route>
            <Route path="/movies/add">
              {/* <AddMoive initalmovie={initalmovie} setMovie={setMovie} /> */}
              <AddMoive />
            </Route>
            {/* //important is mid while fetching the api for edit also give the same one */}
            <Route path="/movie/edit/:mid">
              {/* <EditMovie initalmovie={initalmovie} setMovie={setMovie} /> */}
              <EditMovie />
            </Route>
            <Route path="/movies/:id">
              {/* <MovieDetails movie={initalmovie} /> */}
              <MovieDetails />
            </Route>
            {/* // ..... /movie/edit/:id */}
            {/* <Route path="/abc">
          <Redirect to="/movies" />
        </Route> */}
            <Route path="/movies">
              {" "}
              <MovieList movie={initalmovie} setMovie={setMovie} />{" "}
            </Route>
            <Route path="/color">
              <AddColorBox />
            </Route>
            <Route path="/basic-form">
              <BasicForm />
            </Route>
            <Route path="**">
              {" "}
              <NotFound />
            </Route>
          </Switch>
        </section>
      </Paper>
    </ThemeProvider>
  );
}
//CRUD
//C - Create - Post
//R - Read - Get
//U - Update - Put
//D - Delete -Delete
