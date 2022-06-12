import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoursePage from "./pages/Course";
import Home from "./pages/Home";
import StudentPage from "./pages/Student";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/student" element={<StudentPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
