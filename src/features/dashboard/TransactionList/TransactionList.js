import React, { Component } from 'react'
import { Grid, Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchTransaction } from '../dashboardActions'
import { Link } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const actions = {
    fetchTransaction
}

const mapState = (state) => ({
    transactions : state.dashboard.transactions,
    loading: state.async.loading
})

export class TransactionList extends Component {
  state = {
      transactions : [],
      loading: true
  }
  async componentDidMount(){ 
    await this.props.fetchTransaction();
  }

  componentWillReceiveProps(nextProps){
      this.setState({
        transactions:nextProps.transactions,
        loading: nextProps.loading
      })
  }
  
  render() {
    const {transactions, loading} = this.state;

    return (
        <React.Fragment>
            {loading && <LoadingComponent inverted={true} />}
            <Grid centered>
                <Grid.Column width={14}>
                    <Table celled>
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell>Client Name</Table.HeaderCell>
                        <Table.HeaderCell>Transaction Id</Table.HeaderCell>
                        <Table.HeaderCell>Converted Amount</Table.HeaderCell>
                        <Table.HeaderCell>Currency</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {transactions.length > 0 && transactions.map((transaction,index) => (
                            <Table.Row key={index}>
                                <Table.Cell>
                                    <Link to={`/dashboard/client-detail/${transaction.transaction.merchant.transactionId}`}>
                                        {transaction.customerInfo.billingFirstName} {transaction.customerInfo.billingLastName}
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link to={`/dashboard/transaction-detail/${transaction.transaction.merchant.transactionId}`}>
                                        {transaction.transaction.merchant.transactionId}
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>{transaction.fx.merchant.convertedAmount}</Table.Cell>
                                <Table.Cell>{transaction.fx.merchant.convertedCurrency}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                    </Table>
                </Grid.Column>
            </Grid>
        </React.Fragment>
      )
  }
}

export default connect(mapState,actions)(TransactionList)

