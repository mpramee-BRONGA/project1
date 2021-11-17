import React from 'react';
import { BrowserRouter as Router, Switch,Route, } from 'react-router-dom';

import './App.css';
import {Inventory,MYSQL,MSsql, MongoDB,Oracle,Postgresql,Application} from './pages/Inventory';

import Navbar from './components/Navbar';
import Home from './pages/Home';
const refreshPage = ()=>{
  window.location.reload();
}
const Content=()=>{
    return(
<div >
    
    <Router>
    <Navbar />  
     <Switch >
       <Route path='/home'  component={Home} exact />
       <Route exact path='/home/application'  component={Application}/>
       <Route exact path='/inventory'  component={Inventory}/>
       <Route exact path='/inventory/MYSQL'  component={MYSQL} />
       <Route exact path='/inventory/MSsql'  component={MSsql} onClick={refreshPage}/>
       <Route exact path='/inventory/Oracle'  component={Oracle}/>
       <Route exact path='/inventory/MongoDB'  component={MongoDB}/>
       <Route exact path='/inventory/Postgresql'  component={Postgresql}/>
       
     </Switch>
    </Router>


    
   </div>
    )
}
export default Content;