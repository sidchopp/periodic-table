import React from 'react'
import { Menu, Icon, Header, Popup } from 'semantic-ui-react'

const Nav = () => (
  <div className='nav'>
    <Menu compact style={{ margin: '1vw' }} >
      <Menu.Item>
        <Header as='h2'>
          <a href="https://sid-projects.netlify.app/" target="_blank" rel="noreferrer" >
            <Popup
              offset={[0, 18]}
              inverted
              position='bottom center'
              content='About Me'
              trigger={<Icon color='black' link name='user secret' />}
            />
          </a>
          <Header.Content style={{ fontSize: '1.8vw' }} >
            The Periodic Table
          </Header.Content>
        </Header>
      </Menu.Item>
    </Menu>
  </div>
)

export default Nav;

