import React from "react";
import { Layout, Menu } from "antd";
import { Route, Link } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import ProductAdd from "../Pages/Product/ProductAdd";
import ProductList from "../Pages/Product/ProductList";
import CustomerAdd from "../Pages/Customer/CustomerAdd";
import CustomerList from "../Pages/Customer/CustomerList";
import CustomerDetail from "../Pages/Customer/CustomerDetail";
import CustomerEdit from "../Pages/Customer/CustomerEdit";
import RoleAdd from "../Pages/Role/RoleAdd";
import RoleList from "../Pages/Role/RoleList";

const { Header, Sider, Footer, Content } = Layout;
const { SubMenu } = Menu;
const MainLayout = () => {
    return (
        <Layout>
            <Header className="header">
                <h1>This is Header</h1>
            </Header>
            <Layout style={{ minHeight: "90vh" }}>
                <Sider width={300} style={{ background: "#fff" }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        style={{ height: "90vh", borderRight: 5 }}
                    >
                        <Menu.Item key="1">
                            <Link to="/">Dashboard</Link>
                        </Menu.Item>
                        <SubMenu key="sub1" title="Product">
                            <Menu.Item key="2">
                                <Link to="/products/add">Add Product</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/products/list">Product List</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title="Customer">
                            <Menu.Item key="4">
                                <Link to="/customers/add">Add Customer</Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to="/customers/list">Customer List</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title="Role">
                            <Menu.Item key="4">
                                <Link to="/roles/add">Add Role</Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to="/roles/list">Role List</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: "6px" }}>
                    <Content
                        style={{
                            background: "#fff",
                            padding: 24,
                            margin: 0,
                            minHeight: 800,
                        }}
                    >
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/products/add" component={ProductAdd} />
                        <Route path="/products/list" component={ProductList} />
                        <Route path="/customers/add" component={CustomerAdd} />
                        <Route
                            exact
                            path="/customers/list"
                            component={CustomerList}
                        />
                        <Route
                            exact
                            path="/customers/list/:id"
                            component={CustomerDetail}
                        />
                        <Route path="/customers/edit/:id" component={CustomerEdit} />
                        <Route path="/roles/add" component={RoleAdd} />
                        <Route path="/roles/list" component={RoleList} />
                    </Content>
                </Layout>
            </Layout>
            <Footer />
        </Layout>
    );
};

export default MainLayout;
