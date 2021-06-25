import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Calls from "./containers/Calls";
import Container from "@material-ui/core/Container";

function App() {
    return (
        <div className="App">
            <Container>
                <Router>
                    <Route exact path="/" component={Calls}/>
                </Router>
            </Container>
        </div>
    );
}

export default App;
