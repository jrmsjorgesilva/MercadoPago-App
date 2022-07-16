import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "../components/pages/hero/Hero";
import About from "../components/pages/about/About";
import Nav from "../components/Nav";
import CustomersTable from "../components/pages/clientes/CustomersTable";
import NotFoundPage from "../components/pages/404/NotFoundPage";

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/clientes" element={<CustomersTable />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
