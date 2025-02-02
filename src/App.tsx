import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./shared/footer/footer";
import Header from "./shared/header/header";

function App() {
  return (
    <Router>
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
