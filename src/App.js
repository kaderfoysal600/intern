import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Home/Home';
import { UserProvider } from './Components/UserContext/UserContext';
import Delete from './Components/Delete/Delete';
import Create from './Components/Create/Create';


function App() {


  return (
    <div className="app">
      <UserProvider>
      <Router>
          <Switch>
          <Route path="/create">
              <Create/>
          </Route>
          <Route path="/delete/:name">
              <Delete/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
     </Router>
      </UserProvider>

      </div>


  );
}

export default App;
