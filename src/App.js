import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import MainNav from "./components/Navigation/MainNav";
import { Container, Switch } from "@mui/material";
import Trending from "./components/Pages/Trending/Trending";
import Movies from "./components/Pages/Movies/Movies";
import Series from "./components/Pages/Series/Series";
import { Search } from "@mui/icons-material";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Switch>
              <Route path="/" Component={Trending} exact />
              <Route path="/movies" Component={Movies} />
              <Route path="/series" Component={Series} />
              <Route path="/search" Component={Search} />
            </Switch>
          </Container>
        </div>

        <MainNav />
      </BrowserRouter>
    </>
  );
}

export default App;
