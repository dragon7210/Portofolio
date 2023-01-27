import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/header";
import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Portofolio from "./pages/portofolio";
import Footer from "./layouts/footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Portofolio />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
