import React, {Component} from 'react';
import { Grid, Header, Item, Segment, Icon } from "semantic-ui-react";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTransactionDetail } from '../dashboardActions'
import LoadingComponent from '../../../app/layout/LoadingComponent';

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
            <Header as='h2'>
              <Icon name='list' />
              <Header.Content>
                Transaction Details
                <Header.Subheader>You can see transaction details here.</Header.Subheader>
              </Header.Content>
            </Header>
            <Segment>
                <Item.Group>
                  {transaction.customerInfo && 
                    <Item>
                        <Item.Content verticalAlign='bottom'>
                            <Header as='h1'>{transaction.customerInfo.billingFirstName} {transaction.customerInfo.billingLastName}</Header>
                            <br/>
                            <Header as='h3'>{transaction.customerInfo.email}</Header>
                            <br/>
                            <Header as='h3'>{transaction.customerInfo.billingState}</Header>
                        </Item.Content>
                    </Item>}
                </Item.Group>
            </Segment>
        </Grid.Column>
        <Grid.Column width={14}>
              <Segment>
                  <Grid columns={2}>
                      {transaction.transaction &&
                      <Grid.Column width={8}>
                          <Header icon='list' content='Transaction Details'/>
                          <p>Transaction Id: <strong>{transaction.transaction.merchant.transactionId}</strong></p>
                          <p>Fx TransactionId: <strong>{transaction.transaction.merchant.fxTransactionId}</strong></p>
                          <p>ReferenceNo: <strong>{transaction.transaction.merchant.referenceNo}</strong></p>
                          <p>Operation: <strong>{transaction.transaction.merchant.operation}</strong></p>
                          <p>Status: <strong>{transaction.transaction.merchant.status}</strong></p>
                          <p>Type: <strong>{transaction.transaction.merchant.type}</strong></p>
                      </Grid.Column>}
                      {transaction.fx &&
                      <Grid.Column width={8}>
                          <Header content='Fx Details'/>
                          <p>Original Amount: <strong>{transaction.fx.merchant.originalAmount}</strong></p>
                          <p>Original Currency: <strong>{transaction.fx.merchant.originalCurrency}</strong></p>
                      </Grid.Column>}
                  </Grid>
              </Segment>
          </Grid.Column>
      </Grid>
      </React.Fragment>

    )
  }
}

export default withRouter(connect(mapState,actions)(TransactionDetail));
