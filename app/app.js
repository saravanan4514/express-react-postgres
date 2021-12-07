import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router'
import Home from './views/home';
import Login from './views/login';
import { ConnectedRouter } from 'connected-react-router'


const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <h2>Welcome to React Router Tutorial</h2>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Login'>Login</Link></li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </div>
    </ConnectedRouter>
  )
}

export default App
