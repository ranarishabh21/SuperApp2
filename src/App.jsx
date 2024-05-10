import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import GenrePage from "./pages/GenrePage/GenrePage";
import MoviePage from "./pages/MoviePage/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/genre" element={<GenrePage/>} />
        <Route path="/movie" element={<MoviePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
