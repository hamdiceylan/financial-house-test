import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import LoginPage from '../../features/auth/Login/LoginPage'
import DashboardHome from '../../features/dashboard/DashboardHome/DashboardHome';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={LoginPage}/>
        </Switch>

        <Route 
          path="/(.+)"
          render ={() => (
            <div>
                <Switch>
                  <Route path='/login' component={LoginPage}/>
                  <Route path='/dashboard' component={DashboardHome}/>
                </Switch>
            </div>
          )}
          />
      </div>
    );
  }
}

export default withRouter(App);