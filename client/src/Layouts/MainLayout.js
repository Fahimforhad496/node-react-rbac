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
import UserAdd from "../Pages/User/UserAdd";
import UserList from "../Pages/User/UserList";
import UserEdit from "../Pages/User/UserEdit";
import UserDetail from "../Pages/User/UserDetail";
import ResourceAdd from "../Pages/Resource/ResourceAdd";
import ResourceList from "../Pages/Resource/ResourceList";
import PermissionAdd from "../Pages/Permission/PermissionAdd";
import PermissionList from "../Pages/Permission/PermissionList";

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
                            <Menu.Item key="6">
                                <Link to="/roles/add">Add Role</Link>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Link to="/roles/list">Role List</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title="User">
                            <Menu.Item key="8">
                                <Link to="/users/add">Add User</Link>
                            </Menu.Item>
                            <Menu.Item key="9">
                                <Link to="/users/list">User List</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" title="Resource">
                            <Menu.Item key="10">
                                <Link to="/resources/add">Add Resource</Link>
                            </Menu.Item>
                            <Menu.Item key="11">
                                <Link to="/resources/list">Resource List</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub6" title="Permission">
                            <Menu.Item key="12">
                                <Link to="/permissions/add">
                                    Add Permission
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="13">
                                <Link to="/permissions/list">
                                    Permission List
                                </Link>
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
                        <Route
                            path="/customers/edit/:id"
                            component={CustomerEdit}
                        />
                        <Route path="/roles/add" component={RoleAdd} />
                        <Route path="/roles/list" component={RoleList} />
                        <Route path="/users/add" component={UserAdd} />
                        <Route exact path="/users/list" component={UserList} />
                        <Route path="/users/edit/:id" component={UserEdit} />
                        <Route
                            exact
                            path="/users/list/:id"
                            component={UserDetail}
                        />
                        <Route path="/resources/add" component={ResourceAdd} />
                        <Route
                            path="/resources/list"
                            component={ResourceList}
                        />
                        <Route
                            path="/permissions/add"
                            component={PermissionAdd}
                        />
                        <Route
                            path="/permissions/list"
                            component={PermissionList}
                        />
                    </Content>
                </Layout>
            </Layout>
            <Footer />
        </Layout>
    );
};

export default MainLayout;
