import React, {Component} from 'react';
import { Grid, Segment } from "semantic-ui-react";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTransactionDetail } from '../dashboardActions'
import LoadingComponent from '../../../app/layout/LoadingComponent';
import PageHeader from '../../../app/layout/PageHeader';
import FxDetails from '../FxDetails/FxDetails';
import TransactionCard from '../TransactionCard/TransactionCard';
import CustomerInfo from '../CustomerInfo/CustomerInfo';

const actions = {
  getTransactionDetail
}

const mapState = (state) => ({
  transaction : state.dashboard.currentTransaction
})

export class TransactionDetail extends Component {
  state = {
    transaction : {},
    loading: true
  }
  async componentDidMount(){ 
    const transactionId = this.props.match.params.id;
    await this.props.getTransactionDetail(transactionId);
  }

  componentWillReceiveProps(nextProps){
      this.setState({
        transaction:nextProps.transaction,
        loading: nextProps.loading
      })
  }
  render() {
    const {transaction, loading} = this.state;

    return (
      <React.Fragment>
        {loading && <LoadingComponent inverted={true} />}
        <Grid centered>
          <Grid.Column width={14}>
            <PageHeader 
              icon='list'
              headerMessage='Transaction Details'
              SubheaderMessage='You can see transaction details here.' 
            />
            {transaction.customerInfo && <CustomerInfo customerInfo={transaction.customerInfo} /> }
          </Grid.Column>
          <Grid.Column width={14}>
            <Segment>
              <Grid>
                  { transaction.transaction && <TransactionCard transaction={transaction.transaction.merchant} /> }
                  { transaction.fx && <FxDetails merchant={transaction.fx.merchant} /> }
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    )
  }
}

export default withRouter(connect(mapState,actions)(TransactionDetail));
