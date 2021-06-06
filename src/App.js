import logo from './logo.svg';
import './App.css';
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Items from './Components/Items';
import Footer from './Components/Footer';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddItem from './Components/AddItem';
import Cart from './Components/Cart';
import {persistStore,persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import {PersistGate} from 'redux-persist/integration/react';
import {createStore} from 'redux';
import rootReducer from './Reducers/rootReducer';
import { Provider } from "react-redux";


function App() {

const persistConfig ={
  key:'root',
  storage
}
const persistedReducer = persistReducer(persistConfig,rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar />
          <Router>
            <Switch>
              <Route path="/" exact>
                <Items />
              </Route>
              <Route path="/addItem" component={AddItem} exact />
              <Route path="/addCart" component={Cart} exact />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
