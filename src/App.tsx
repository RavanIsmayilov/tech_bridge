import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./shared/header/header";
import HomePage from "./pages/home_page/home_page";
import Footer from "./shared/footer/footer";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
