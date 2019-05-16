import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import LoginPage from '../../features/auth/Login/LoginPage'
import DashboardHome from '../../features/dashboard/DashboardHome/DashboardHome';

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={LoginPage}/>
        </Switch>
        <Route 
          path="/(.+)"
          render ={() => (
            <Switch>
              <Route path='/login' component={LoginPage}/>
              <Route path='/dashboard' component={DashboardHome}/>
            </Switch>
          )}
          />
      </React.Fragment>
    );
  }
}

export default withRouter(App);