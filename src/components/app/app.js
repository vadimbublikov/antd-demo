import React, {useState, useEffect} from 'react';
import { Layout } from 'antd';
import { Button, DatePicker, version } from "antd";
import './app.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';

import SideNav from '../layouts/sidebar'
import List from '../pages/list'
import FormApp from '../pages/form'
import EmptyData from '../pages/empty-data'
import TableDemo from '../pages/table-demo'
import ChartDemo from '../pages/chart-demo'

const App = () => {
    const { Header, Sider, Content} = Layout;

    const [collapse, setCollapse] = useState(false);

    useEffect(() => {
        window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
    }, []);

    const handleToggle = (event: any) => {
        event.preventDefault();
        collapse ? setCollapse(false) : setCollapse(true);
    }

    return (
        <div className="App">
            <Router>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={collapse}>
                        <SideNav />
                    </Sider>

                    <Layout>
                        <Header className="siteLayoutBackground" style={{padding: 0, background: "#001529"}}>
                                  {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                      className: 'trigger',
                                      onClick: handleToggle,
                                      style: {color: "#fff"}
                                  })}
                        </Header>
                      <Content style={{margin: '24px 16px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff"}}>
                            <Switch>
                                <Route path="/list" component={List} />
                                <Route path="/form" component={FormApp} />
                                <Route path="/empty" component={EmptyData} />
                                <Route path="/table" component={TableDemo} />
                                <Route path="/chart" component={ChartDemo} />
                                <Redirect to="/list" from="/" />
                            </Switch>
                      </Content>
                    </Layout>

                </Layout>


            </Router>
        </div>
    )
}

export default App
