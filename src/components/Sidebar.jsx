import React from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = () => {
    return (
        <Sider collapsible>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    Home
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                    Profile
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;

