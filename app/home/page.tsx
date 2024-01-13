"use client";
import { Layout } from "antd";
import SlackHeader from "../components/SlackHeader";

type Props = {};

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  backgroundColor: "#fff",
  padding: 0,
  height: "auto",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
};

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
  height: "100vh",
};

const Home = (props: Props) => {
  return (
    <Layout style={layoutStyle}>
      <Sider width="25%" style={siderStyle}>
        Sider
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <SlackHeader />
        </Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
