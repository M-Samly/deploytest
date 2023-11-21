import React, { useState } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import SideMenu from './SideMenu';
import Container from './Container';
import Footer from './Footer';
import AddProduct from './AddProduct';
import ViewProduct from './ViewProduct';
import DeleteProduct from './DeleteProduct';

const { Sider, Content } = Layout;

const App = () => {
  const [isMenuCollapsed, setMenuCollapsed] = useState(false);

  const toggleMenu = () => {
    setMenuCollapsed(!isMenuCollapsed);
  };

  return (
    <Layout>
      <Sider collapsed={isMenuCollapsed}>
        <SideMenu onToggle={toggleMenu} />
      </Sider>
      <Layout>
        <Header />
        <Content>
          <Container>
            {/* Use conditional rendering based on selected menu option */}
            <ViewProduct />
            <AddProduct />
            <DeleteProduct />
          </Container>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default App;
