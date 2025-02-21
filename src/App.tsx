import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./shared/header/header";
import HomePage from "./pages/home_page/home_page";
import Footer from "./shared/footer/footer";
import EducationPage from "./pages/education_page/education_page";
import PuzzleGamePage from "./pages/puzzle_game/puzzle_game_page";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
          <Route path="/puzzlegame" element={<PuzzleGamePage />} />
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/educationpage" element={<EducationPage />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </DndProvider>
  );
}

export default App;
