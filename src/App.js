
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import LandingPage from "./components/LandingPage/landingPage.jsx";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/ConexNeg-Project" element={<HomePage />} />
        <Route path="/landingPage" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
