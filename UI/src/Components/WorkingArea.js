import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './WorkingArea.css'

import Home from './Home';
//import AddProperty from './AddProperty';
import AddKey from './AddKey';
//import AddPerson from './AddPerson';
import CheckoutKey from './CheckoutKey';
//import TestComp from './TestComp';
import FormAddProperty from './FormAddProperty';

export default function WorkingArea() {
  return(
    <div className='WorkingArea'>
      {/*<Router>*/}
        <Switch>
          {/* <Route path='/addproperty'>
            <AddProperty />
          </Route> */}
          <Route path='/addkey'>
            <AddKey />
          </Route>
          {/* <Route path='/addkeyholder'>
            <AddPerson />
          </Route> */}
          <Route path='/checkoutkey'>
            <CheckoutKey />
          </Route>
          <Route path='/FormAddProperty'>
            <FormAddProperty />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      {/*</Router>*/}
    </div>
  );
}
