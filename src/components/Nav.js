import React from "react";
import { Menu, Icon, Header } from "semantic-ui-react";

const Nav = () => (
  <div className="nav">
    <Menu secondary compact style={{ margin: "1vw" }}>
      <Menu.Item>
        <Header as="h2">
          <a
            href="https://sid-chopra.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon color="blue" link name="home" />
          </a>
          <Header.Content style={{ fontSize: "1.5rem" }}>
            The Periodic Table
          </Header.Content>
        </Header>
      </Menu.Item>
    </Menu>
  </div>
);

export default Nav;
