import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

const CreditCard = ({client}) => {
  return (
    <Grid.Column width={8}>
        <Header icon='payment' content='Card Details'/>
        <p>Card number: <strong>{client.number}</strong></p>
        <p>Expiry Month: <strong>{client.expiryMonth}</strong></p>
        <p>Expiry Year: <strong>{client.expiryYear}</strong></p>
    </Grid.Column>
  )
}

export default CreditCard
