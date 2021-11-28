import './App.css';
import Header from './component/Header.js';
import Home from './component/Home.js';
import Form from './component/Form.js';
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
            <Route path="/Form" exact component={Form}/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
