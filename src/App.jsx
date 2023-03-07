import React from "react";
import { Layout } from "antd";
import Sidebar from "../src/components/Sidebar"
import Header from "../src/components/Header";
import Map from "../src/components/Map";
import Footer from "../src/components/Footer";
import FormInput from "./components/FormInput";

const { Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />

      <Layout className="site-layout">
        <Header />
        <FormInput />
        <Content style={{ margin: "10px 30px" }}>
          <Map />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default App;
