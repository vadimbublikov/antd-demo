import React from 'react';
import { Menu } from 'antd';
import {
    UserOutlined,
    TableOutlined,
    AreaChartOutlined,
    RightOutlined
  } from '@ant-design/icons';
import {useHistory}  from 'react-router';

const SideNav = () => {
    const history = useHistory();
    const handleUserClick = () => {
        history.push('/list');
    }
    const handleEmptyClick = () => {
        history.push('/empty');
    }
    const handleTableClick = () => {
        history.push('/table');
    }
    const handleChartClick = () => {
        history.push('/chart');
    }

    return (
      <div>
        <div style={{height: "32px", background: "rgba(255, 255, 255, 0.2)", margin: "16px"}}></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" onClick={handleUserClick}>
                    <UserOutlined />
                    <span> Users</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={handleEmptyClick}>
                    <RightOutlined />
                    <span> Empty</span>
                </Menu.Item>
                <Menu.Item key="3" onClick={handleTableClick}>
                    <TableOutlined />
                    <span> Table</span>
                </Menu.Item>
                <Menu.Item key="4" onClick={handleChartClick}>
                    <AreaChartOutlined />
                    <span> Chart</span>
                </Menu.Item>
            </Menu>
        </div>
  );
}
export default SideNav;