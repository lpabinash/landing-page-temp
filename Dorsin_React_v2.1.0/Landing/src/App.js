import React from "react";
import routes from "./routes";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          {routes.map((route, idx) => (
            <Route path={route.path} element={<route.component/>} key={idx} />
          ))}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
