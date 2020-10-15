import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/routes';
import {Switch, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
                <Routes />
              </Switch>
    </div>
    </Router>
  );
}

export default App;
