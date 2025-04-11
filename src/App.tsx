import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./shared/header/header";
import HomePage from "./pages/home/home_page";
import Footer from "./shared/footer/footer";

import ExpressPage from "./pages/express/express_page";
import EducationPage from "./pages/education_page/education_page";
import PuzzleGamePage from "./pages/puzzle_game/puzzle_game_page";

import DragDropPage from "./pages/dragdrop/dragdrop_page";
// import ExpressPage from "./pages/express/express_page"
// import EducationPage from "./pages/education_page/education_page"
// import PuzzleGamePage from "./pages/puzzle_game/puzzle_game_page"
 

import DonatePage from "./pages/donate_page/donate_page";
import DonateFormPage from "./pages/donate_page/donate_form_page";
import RegisterPage from "./pages/register/register_page";
import LoginPage from "./pages/login/login_page";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes>
          <Route path="/puzzlegame" element={<PuzzleGamePage />} />
          <Route path="/dragdrop" element={<DragDropPage />} />
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/educationpage" element={<EducationPage />} />
                  <Route path="/express" element={<ExpressPage />} />
                  <Route path="/donatepage" element={<DonatePage />} />
                  <Route path="/donateformpage" element={<DonateFormPage />} />
                  <Route path="/registerpage" element={<RegisterPage />} />
                  <Route path="/loginpage" element={<LoginPage />} />
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
