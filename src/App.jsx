import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesPage from "./pages/Movies";
import DefaultLayout from "./layouts/DefaultLayout";
import MovieDetailPage from "./pages/MovieDetail";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path='/movies' Component={MoviesPage} />
          <Route path="/movies/:id" Component={MovieDetailPage} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
