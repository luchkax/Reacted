import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListData from './Components/ListData'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

const routing = (
    <Router>
    <div>
      <App/>
      <Route path="/users" component={ListData} />
        {/* <Route path="/form" component={FormData} /> */}
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
