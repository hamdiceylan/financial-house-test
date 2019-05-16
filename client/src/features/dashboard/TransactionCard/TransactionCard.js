import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

const TransactionCard = ({transaction}) => {
  return (
    <Grid.Column width={8}>
        <Header icon='list' content='Transaction Details'/>
        <p>Transaction Id: <strong>{transaction.transactionId}</strong></p>
        <p>Fx TransactionId: <strong>{transaction.fxTransactionId}</strong></p>
        <p>ReferenceNo: <strong>{transaction.referenceNo}</strong></p>
        <p>Operation: <strong>{transaction.operation}</strong></p>
        <p>Status: <strong>{transaction.status}</strong></p>
        <p>Type: <strong>{transaction.type}</strong></p>
    </Grid.Column>
  )
}

export default TransactionCard
