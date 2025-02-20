import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./shared/header/header";
import HomePage from "./pages/home_page/home_page";
import Footer from "./shared/footer/footer";
import EducationPage from "./pages/education_page/education_page";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/educationpage" element={<EducationPage />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
