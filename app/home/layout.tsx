"use client";
import { Layout } from "antd";
import React from "react";
import SlackContent from "../components/SlackContent";
import SlackHeader from "../components/SlackHeader";
import SlackSider from "../components/SlackSider";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  backgroundColor: "#fff",
  padding: 0,
  height: "auto",
};

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
  height: "100vh",
};

const Homelayout = () => {
  return (
    <Layout style={layoutStyle}>
      <SlackSider />
      <Layout>
        <SlackHeader />
        <SlackContent />
      </Layout>
    </Layout>
  );
};

export default Homelayout;
