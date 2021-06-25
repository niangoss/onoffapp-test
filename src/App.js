import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Calls from "./containers/Calls";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Calls}/>
      </Router>
    </div>
  );
}

export default App;
