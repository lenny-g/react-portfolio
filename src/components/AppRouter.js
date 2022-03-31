import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/HomePage";
import { Portfolio } from "../pages/PortfolioPage";
import { Contact } from "../pages/ContactPage";
export const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/portfolio" element={<Portfolio />} />
      <Route exact path="/contact" element={<Contact />} />
      {/* <Route path="*" element={<Home />} /> */}
    </Routes>
  );
};
