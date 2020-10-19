import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/routes';
import AuthContextProvider from "./context/authContext";
import {Switch, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <div className="App">
            <Switch>
                    <Routes />
                  </Switch>
        </div>

      </AuthContextProvider>
    </Router>
  );
}

export default App;
