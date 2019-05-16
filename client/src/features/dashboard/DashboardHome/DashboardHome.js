import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Switch, Route, Redirect } from 'react-router-dom'
import DashboardNav from '../DashboardNav/DashboardNav'
import ClientDetail from '../ClientDetail/ClientDetail';
import TransactionList from '../TransactionList/TransactionList';
import TransactionDetail from '../TransactionDetail/TransactionDetail';


const DashboardHome = () => {
  return (
    <React.Fragment>
      <Grid stackable centered>
        <Grid.Column width={16}>
          <DashboardNav/>
        </Grid.Column>
      </Grid>
      <Switch>
        <Redirect exact from='/dashboard' to='dashboard/home'/>
        <Route path='/dashboard/home' render={() => <TransactionList />}/>
        <Route path='/dashboard/client-detail/:id' component={ClientDetail}/>
        <Route path='/dashboard/transaction-detail/:id' component={TransactionDetail}/>
        <Route path='/dashboard/transactions' render={() => <TransactionList />}/>
      </Switch>
    </React.Fragment>
  )
}

export default DashboardHome
