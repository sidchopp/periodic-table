import React from 'react'
import { Menu, Icon, Header } from 'semantic-ui-react'

const Nav = () => (
  <div className='nav'>
    <Menu compact style={{ margin: '1vw' }} >
      <Menu.Item>
        <Header as='h2'>
          <a href="https://sid-projects.netlify.app/" target="_blank" rel="noreferrer"> <Icon color='black' link name='sidebar' /></a>
          <Header.Content style={{ fontSize: '1.8vw' }} >The Periodic Table</Header.Content>
        </Header>
      </Menu.Item>
    </Menu>
  </div>
)

export default Nav;

