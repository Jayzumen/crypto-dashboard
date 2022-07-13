import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrencyConverter from "./components/CurrencyConverter";
import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CurrencyConverter />} path="/converter" />
        <Route element={<NewsFeed />} path="/news" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
