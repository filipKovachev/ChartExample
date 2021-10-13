import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import Navbar from '../src/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SecondGrid from '../src/SecondGrid';
import React from 'react';
import FirstGrid from '../src/FirstGrid';


function App() {

  
  return (
    
    <div className="App">
       <Router>
      <div className="App">
      <Navbar/>
      <div className="content">
      <Switch>
      <Route exact path="/">
      <FirstGrid/>
      </Route>
      <Route exact path="/secondGrid">
      <SecondGrid/>
      </Route>
    </Switch>
     </div>
    </div>
    </Router>
    </div>
  );
}

export default App;