import {
  BellOutlined,
  EllipsisOutlined,
  HomeOutlined,
  MessageOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Layout, Menu } from "antd";

const { Sider } = Layout;

const SiderStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  backgroundColor: "#f0f0f0",
  height: "100vh",
  gap: "10px",
  paddingTop: 52,
};

const menuItems = [
  {
    key: "1",
    icon: <HomeOutlined />,
  },
  {
    key: "2",
    icon: <MessageOutlined />,
  },
  {
    key: "3",
    icon: <BellOutlined />,
  },
  {
    key: "4",
    icon: <EllipsisOutlined />,
  },
];

const SlackSider = () => {
  return (
    <Sider width="auto">
      <div style={SiderStyle}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar size={50} shape="square" icon={<UserOutlined />} />
        </div>
        <Menu
          style={{ border: 0, backgroundColor: "#f0f0f0" }}
          mode="vertical"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            style={{ width: 50, height: 50 }}
          />
          <Avatar
            size={50}
            shape="square"
            icon={<UserOutlined />}
            style={{ marginTop: "10px" }}
          />
        </div>
      </div>
    </Sider>
  );
};

export default SlackSider;
