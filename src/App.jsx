import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrencyConverter from "./components/CurrencyConverter";
import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";
import Home from "./components/Home";
import TopCrypto from "./components/TopCrypto";
import Coins from "./components/Coins";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<TopCrypto />} path="/topCrypto" />
        <Route element={<CurrencyConverter />} path="/converter" />
        <Route element={<NewsFeed />} path="/news" />
        <Route element={<Coins />} path="/coin/:coinId">
          <Route path=":coinId" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
