import React  from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
       } from 'react-router-dom'
import './assets/css/amh-header.css'
import './assets/css/ai-media.css'
import './assets/css/ai-google-fonts.css'
import './assets/css/header.css'
import Home from './pages/Home'
import Estates from './pages/Estates'
import NavBarMenu from './components/NavBarMenu'
import Footer from './components/Footer'
import Test from './pages/Test.js'
import blank from './pages/blank.js'
import PagesState from "./context/pages/PagesState"
import ListingList from './pages/ListingList'
import Property from './pages/Property'
const App = () => {

  return (<div className="App">
      <PagesState>
        <Router >
            <NavBarMenu />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/estates" component={Estates} />
              <Route path="/test" component={Test}/>
              <Route path="/properties/:slug" component={Property}/>
              <Route path="/listing-list/:page" component={ListingList}/>
              <Route exact path="/page-not-found" component={blank}/>
              <Route component={blank}/>
            </Switch>
            <Footer />
          </Router>
      </PagesState>
    </div>
  )
}

export default App;
