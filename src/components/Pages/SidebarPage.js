import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  PieChartOutlined,
  TableOutlined,
  EditOutlined,
  LoginOutlined
} from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SidebarPage extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    // console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={[]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <NavLink exact to="./deshbord" />DeshBord
            </Menu.Item>
            <Menu.Item key="2" icon={<EditOutlined />}>   <NavLink exact to="./updateprofilepage" />Update Profile</Menu.Item>
            <Menu.Item key="3" icon={<TableOutlined />}>
              <Link to="./tableview">Table</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<LoginOutlined />}>
              <Link to="login"><a style={{ color: 'white' }} onClick={() => localStorage.clear()}>LogOut</a></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>

            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}


export default SidebarPage