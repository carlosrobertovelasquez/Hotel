import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
    } from 'react-router-dom';
import App from './App';

const root = document.getElementById("root")
    //const element = React.createElement { "h1",{},"Hola Mundo"  }

ReactDOM.render(
    <Router>
      <App/>
    </Router>
      , root);