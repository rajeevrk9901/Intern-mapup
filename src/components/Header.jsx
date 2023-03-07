import React from "react";
import { Layout, Button } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header } = Layout;

const AppHeader = () => {
    return (
        <Header className="header">
            <div className="logo" />
            <Button type="text" icon={<UserOutlined />} className="login" style={{ color: "#fff" }}>
                Login
            </Button>
            <Button type="text" icon={<LogoutOutlined />} className="logout" style={{ color: "#fff" }}>
                Logout
            </Button>
        </Header>
    );
};

export default AppHeader;
