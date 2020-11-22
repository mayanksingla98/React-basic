import React from 'react';
import { Provider } from 'react-redux'
import {store} from './Redux/Store'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import FunctionalCom from './components/FunctionalCom'
import ClassComp from './components/ClassComp'
import WithoutJSX from './components/WithoutJSX'
import Counter from './components/Counter'
import Parent from './components/Parent';
import ConditionalRender from './components/ConditionalRender';
import Listing from './components/Listing'
import GetApi from './components/GetApi'
import HomePage from './components/HomePage';
import Error from './components/Error'
import Menu from './components/Menu';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import IceCream_CakeShop from './components/IceCream_CakeShop';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/listing' component={Listing} />
          <Route exact path='/functionalComp' render={(props) => (< FunctionalCom {...props} name='Mayank' />)} />
          <Route exact path='/classComp' component={ClassComp} />
          <Route exact path='/withoutJSX' component={WithoutJSX} />
          <Route exact path='/counter' component={Counter} />
          <Route exact path='/parent-child' component={Parent} />
          <Route exact path='/conditionalRendering' component={ConditionalRender} />
          <Route exact path='/getApi' component={GetApi} />
          <Route exact path='/form' component={Form} />
          <Route exact path='/lifecycle' component={LifecycleA} />
          <Route exact path='/shop' component={IceCream_CakeShop} />
          <Route component={Error} />
        </Switch>
      </div>
     </Provider>
  );
}

export default App;
