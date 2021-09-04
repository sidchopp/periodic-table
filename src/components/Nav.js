import React from 'react'
import { Button, Menu, Icon, Header } from 'semantic-ui-react'

import '../app.css'

const Nav = () => (
  <div className='nav'>
    <Menu compact style={{ margin: '1vw' }} >
      <Menu.Item>
        <Header as='h2'>
          <a href="https://github.com/sidchopp" target="_blank" > <Icon color='violet' link name='table' /></a>
          <Header.Content >The Periodic Table</Header.Content>
        </Header>
      </Menu.Item>
    </Menu>
  </div>
)

export default Nav;

