import React from 'react'
import { Segment, Item, Header } from 'semantic-ui-react'

const CustomerInfo = ({customerInfo}) => {
  return (
    <Segment>
        <Item.Group>
            <Item>
                <Item.Content verticalAlign='bottom'>
                    <Header as='h1'>{customerInfo.billingFirstName} {customerInfo.billingLastName}</Header>
                    <br/>
                    <Header as='h3'>{customerInfo.email}</Header>
                    <br/>
                    <Header as='h3'>{customerInfo.billingState}</Header>
                </Item.Content>
            </Item>
        </Item.Group>
    </Segment>
  )
}

export default CustomerInfo
