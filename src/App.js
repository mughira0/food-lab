import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFoundPage from "./notFound";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/not-found" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
