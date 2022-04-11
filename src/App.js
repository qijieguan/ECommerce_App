import './App.css';
import Header from './component/Header.js';
import Home from './component/Home.js';
import Store from './component/Store.js';
import ItemExpand from './component/ItemExpand.js';
import Form from './component/Form.js';
import Checkout from './component/Checkout.js';
import About from './component/About.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { createStore } from 'redux';
import allReducers from './component/reducers';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Store" exact component={Store}/>
            <Route path="/Store/:id" exact component={ItemExpand}/>
            <Route path="/Checkout" exact component={Checkout}></Route>
            <Route path="/Form" exact component={Form}/>
            <Route path="/About" exact component={About}/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
