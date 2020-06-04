import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
    <Header />
    <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/about' component={About} />
        <Route  path='/contact' component={Contact} />
    </Switch>
    <Footer />
    </Router>
    
  </>
  );
}

export default App;
