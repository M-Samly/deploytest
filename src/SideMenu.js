import React from 'react';
import { Menu, Button } from 'antd';
import {
  PlusOutlined,
  EyeOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

const SideMenu = ({ onToggle }) => {
  return (
    <div>
      <Button type="primary" onClick={onToggle}>
        =
      </Button>
      <Menu mode="vertical" theme="dark">
        <Menu.Item icon={<PlusOutlined />} key="addProduct">
          Add Product
        </Menu.Item>
        <Menu.Item icon={<EyeOutlined />} key="viewProduct">
          View Product
        </Menu.Item>
        <Menu.Item icon={<DeleteOutlined />} key="deleteProduct">
          Delete Product
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideMenu;
