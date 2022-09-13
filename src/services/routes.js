import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import Dogpage from "../pages/Dogpage/index";

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogpage" element={<Dogpage />} />
      </Routes>
    </Router>
  );
}
