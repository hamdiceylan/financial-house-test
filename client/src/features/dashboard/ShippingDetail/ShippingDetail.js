import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

function ShippingDetail({client}) {
  return (
    <Grid.Column width={8}>
        <Header icon='shipping' content='Shipping Details'/>
        <p>Address: <strong>{client.shippingAddress1} {client.shippingAddress2}</strong></p>
        <p>Shipping City <strong>{client.shippingCity}</strong></p>
        <p>Shipping Country: <strong>{client.shippingCountry}</strong></p>
        <p>Shipping Post Code: <strong>{client.shippingPostcode}</strong></p>
    </Grid.Column>
  )
}

export default ShippingDetail
