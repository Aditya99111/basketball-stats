import "./App.css";
import Landing from "./Landing";
import Search from "./Pages/Search";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Rate from "./Pages/Rate/Rate"
import Privacy from "./Pages/Privacy"
import Terms from "./Pages/Terms"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/search" exact element={<Search />} />
          <Route path="/rate" exact element={<Rate />} />
          <Route path="/privacy" exact element={<Privacy />} />
          <Route path="/terms" exact element={<Terms />} />
          <Route path="/" exact element={<Landing />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
