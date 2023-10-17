import { BrowserRouter, Routes, Route } from "react-router-dom";

//Context
import DetailContextProvider from "./context/DetailContext";
import SearchContextProvider from "./context/SearchContext";
import FavoriteContextProvider from "./context/FavoriteContext";

//Custom Hooks
import useShowComponents from "./customHooks/useShowComponents";

//components
import Header from "./views/Header";
import Container from "./views/Container";
import Favorites from "./views/Favorites";
import About2 from "./views/About2";
import Footer from "./views/Footer";
import NotFound from "./views/NotFound";
import TopArrow from "./views/TopArrow";
import Intro from "./views/Intro.jsx";
import NoResults from "./views/NoResults";

export default function App() {

  const showComponents = useShowComponents()

  return (
    <BrowserRouter>
      <div className="mainContainer h-screen"></div>
      <Intro  />
      {showComponents && (
        <FavoriteContextProvider>
        <SearchContextProvider>
          <DetailContextProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Container />} />
              <Route path="/detail/:id" element={<Container />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/about" element={<About2 />} />
              <Route path="/no-results" element={<NoResults />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </DetailContextProvider>
        </SearchContextProvider>
        <TopArrow />
      </FavoriteContextProvider>
      )}
    </BrowserRouter>
  );
}
