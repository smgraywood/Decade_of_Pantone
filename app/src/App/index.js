import * as React from "react";

import { Routes, Route } from "react-router-dom";

import Tasks from "../Tasks";

const App = () => (
  <>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  </>
);

const Home = () => (
  <>
    <header>
      <h1>{process.env.REACT_APP_TITLE}</h1>
      <p>{process.env.REACT_APP_SUBTITLE}</p>
    </header>
    <Tasks />
  </>
);

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

export default App;
