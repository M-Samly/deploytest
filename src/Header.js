import React from 'react';
import { Menu } from 'antd';

const Header = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">Product</Menu.Item>
      <Menu.Item key="3">About Us</Menu.Item>
      <Menu.Item key="4">Contact Us</Menu.Item>
    </Menu>
  );
};

export default Header;
