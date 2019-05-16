import React from 'react'
import { Icon, Header } from 'semantic-ui-react'

const PageHeader = ({icon, headerMessage, SubheaderMessage}) => {
  return (
    <Header as='h2'>
        <Icon name={icon} />
        <Header.Content>
            {headerMessage}
            <Header.Subheader>{SubheaderMessage}</Header.Subheader>
        </Header.Content>
    </Header>
  )
}

export default PageHeader
