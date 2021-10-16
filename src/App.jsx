import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './Components/About';
import Header from './Components/Header';
import Home from './Components/Home'
import NavBar from './Components/Navbar';
import Statewise from './Components/Statewise';
import Symptoms from './Components/Symptoms';

function App() {
    return (
        <div>
            <Header/>
            <NavBar/>
            <Switch>
            <Route path='/covidtracker' exact component={Home}/>
            <Route path='/' exact  ><Redirect to='/covidtracker'/> </Route>
                <Route exact path='/about' component={About} />
                <Route exact path='/symptoms' component={Symptoms} />
                <Route exact path='/statewise' component={Statewise} />
            </Switch>
        </div>
    )
}

export default App
