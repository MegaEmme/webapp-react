import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesPage from "./pages/Movies";
import DefaultLayout from "./layouts/DefaultLayout";
import MovieDetailPage from "./pages/MovieDetail";
import MovieAddPage from "./pages/MovieAddPage";
import GlobalContext from "./contexts/globalContext";
import { useState } from "react";

function App() {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <GlobalContext.Provider value={{
      isLoading,
      setIsLoading
    }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<div>Home Page</div>} />//creare component homepage
            <Route path='/movies' Component={MoviesPage} />
            <Route path="/movies/:slug" Component={MovieDetailPage} />
            <Route path="/movies/new" Component={MovieAddPage} />
          </Route>
          <Route path="*" element={<div>404</div>} />//creare component 404
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
};

export default App;
