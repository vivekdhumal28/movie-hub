import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trending from "./Components/Pages/Trending/Trending";
import Movies from "./Components/Pages/Movies/Movies";
import Series from "./Components/Pages/Series/Series";
import Search from "./Components/Pages/Search/Search";
import { Container } from "@mui/material";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <Navbar />
    </Router>
  );
}

export default App;
