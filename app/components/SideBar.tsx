"use client";
import {
  BellOutlined,
  EllipsisOutlined,
  HomeOutlined,
  MessageOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Menu } from "antd";
import { useRouter } from "next/navigation";

const SiderStyle: React.CSSProperties = {
  overflowY: "auto",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "#f0f0f0",

  height: "calc(100vh - 72px)",
};

const SideBar = () => {
  const router = useRouter();

  const menuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      onClick: () => {
        router.push("/home");
      },
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

  return (
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
  );
};

export default SideBar;
