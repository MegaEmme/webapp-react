import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesPage from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path='/movies' Component={MoviesPage} />
          <Route path="/movies/:id" Component={MovieDetail} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
