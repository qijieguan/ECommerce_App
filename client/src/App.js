import './App.css';
import Header from './component/Header.js';
import Home from './component/Home.js';
import View from './component/ViewItems.js';
import ItemExpand from './component/ItemExpand.js';
import Form from './component/Form.js';
import Account from './component/Account.js';
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
            <Route path="/View" exact component={View}/>
            <Route path="/View/:id" exact component={ItemExpand}/>
            <Route path="/Form" exact component={Form}/>
            <Route path="/Account" exact component={Account}/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
