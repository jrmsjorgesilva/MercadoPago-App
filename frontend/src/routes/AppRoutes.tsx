import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Nav from "../components/Nav";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
