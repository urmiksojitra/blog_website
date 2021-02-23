// import React from 'react'
// import Navbar from '../Layout/Navbar'

// function UserLoginPage() {
//     return (
//         <div>
//         {/* <Navbar/> */}
//             <h1>UserLogin</h1>
//         </div>
//     )
// }

// export default UserLoginPage


import React from 'react'

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  TableOutlined,
  EditOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class UserLoginPage extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              {/* DeshBord */}
              <Link to="deshbord">DeshBord</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<EditOutlined />}>
              Edit
            </Menu.Item>
            <Menu.Item key="9" icon={<TableOutlined />}>
              {/* Table */}
              <Link to="tableview">Table</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>

            </Breadcrumb>

          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}


export default UserLoginPage