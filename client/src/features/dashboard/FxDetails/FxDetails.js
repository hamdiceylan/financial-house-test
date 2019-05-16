import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

const FxDetails = ({merchant}) => {
  return (
    <Grid.Column width={8}>
        <Header content='Fx Details'/>
        <p>Original Amount: <strong>{merchant.originalAmount}</strong></p>
        <p>Original Currency: <strong>{merchant.originalCurrency}</strong></p>
    </Grid.Column>
  )
}

export default FxDetails
