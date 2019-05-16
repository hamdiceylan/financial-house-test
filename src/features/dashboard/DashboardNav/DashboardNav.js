import React from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

function DashboardNav() {
  return (
    <Menu>
      <Menu.Item><Image src='/assets/financial-house-logo.png' style={{width: '150px'}} /></Menu.Item>
      <Menu.Item as={NavLink} to='/dashboard/transactions'>Transactions</Menu.Item>
      <Menu.Item position='right' as={NavLink} to='/login'>Logout</Menu.Item>
    </Menu>
  )
}

export default DashboardNav
