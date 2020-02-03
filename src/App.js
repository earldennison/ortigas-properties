import React  from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/css/amh-header.css';
import './assets/css/ai-media.css';
import './assets/css/ai-google-fonts.css';
import './assets/css/header.css';
import Home from './pages/Home';
import About from './pages/About';
import Estates from './pages/Estates';
import NavBarMenu from './components/NavBarMenu';
import Footer from './components/Footer'
import Test from './pages/Test.js'
const App = () =>{
  return (
    <div className="App">
          <Router>
            <NavBarMenu />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/estates" component={Estates} />
              <Route path="/test" component={Test}/>
            </Switch>
          </Router>
      <Footer />
    </div>
  );
}

export default App;
