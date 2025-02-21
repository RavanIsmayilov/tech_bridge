import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./shared/header/header";
import HomePage from "./pages/home/home_page";
import Footer from "./shared/footer/footer";
import ExpressPage from "./pages/express/express_page"

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/express" element={<ExpressPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
