import React from "react"
import {Router, Route, hashHistory} from "react-router"
import {Provider} from 'react-redux'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {createStore, combineReducers} from 'redux'
import * as reducers from "../reducers"

import MainPage from "./MainPage"
import NotFound404 from "../components/NotFound404"

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  // remove in final version
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const history = syncHistoryWithStore(hashHistory, store);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={MainPage}/>
          <Route path="*" component={NotFound404}/>
        </Router>
      </Provider>
    )
  }
}

export default App;
