import { Layout, Menu } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  background-color: #dddbe8;
  .ant-menu {
    width: 100%;
    background-color: #dddbe8;
    a {
      height: 64px;
    }
  }
`;

const Navbar = () => (
  <StyledHeader>
    <Menu mode="horizontal">
      <Menu.Item key="/">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/profile">
        <Link href="/profile">
          <a>Profile</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/login">
        <Link href="/">
          <a>Login</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/logout">
        <Link href="/">
          <a>Logout</a>
        </Link>
      </Menu.Item>
    </Menu>
  </StyledHeader>
);

export default Navbar;
