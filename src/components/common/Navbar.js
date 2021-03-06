import React from "react";
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">My Stats</Link>
      {" | "}
      <Link to="/tools" activeClassName="active">Tools</Link>
      {" | "}
      <Link to="/tools/meal-planner" activeClassName="active">Meal Planner</Link>
      {" | "}
      <Link to="/tools/meal-stats" activeClassName="active">Meal Stats</Link>
      {" | "}
      <Link to="/tools/run-helper" activeClassName="active">Run Helper</Link>
      {" | "}
      <Link to="/tools/test-page" activeClassName="active">Test-Page</Link>

    </nav>
  )
}
