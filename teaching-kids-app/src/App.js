import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import HomePage from "./components/Pages/HomePage";
import GamesPage from "./components/Pages/GamesPage";
import AboutPage from "./components/Pages/About";
import VideoPage from "./components/Pages/Video";
import Footer from "./components/Layout/Footer"; // Assuming you have a Footer component


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Games" element={<GamesPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;