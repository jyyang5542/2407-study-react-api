import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './views/Main';
import Guide from './views/Guide';
import DataOne from './views/DataOne';
import DataTwo from './views/DataTwo';
import './assets/css/styles.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>React.js 템플릿</h1>
          <nav>
            <Link to="/">Main</Link>
            <Link to="/data">Data</Link>
            <Link to="/guide">Guide</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Main />
                </>
              }
            />
            <Route
              exact
              path="/guide"
              element={
                <>
                  <Guide />
                </>
              }
            />
            <Route
              path="/data"
              element={
                <>
                  <DataOne />
                  <DataTwo />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
