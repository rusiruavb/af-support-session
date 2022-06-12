import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="student">
        <button>Manage Students</button>
      </Link>
      <Link to="course">
        <button>Manage Courses</button>
      </Link>
    </div>
  );
};

export default Home;
