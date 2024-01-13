import {
  HistoryOutlined,
  LeftOutlined,
  QuestionCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Button, Input, Layout } from "antd";

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  height: "auto",
  backgroundColor: "#f0f0f0",
};

const SlackHeader = () => {
  const { Header } = Layout;

  return (
    <Header style={headerStyle}>
      <div style={{ display: "flex", gap: "10px", paddingLeft: 220 }}>
        <Button type="text" icon={<LeftOutlined />} />
        <Button type="text" icon={<RightOutlined />} />
        <Button type="text" icon={<HistoryOutlined />} />
        <Input.Search placeholder="Search..." style={{ width: 500 }} />
      </div>
      <Button type="text" icon={<QuestionCircleOutlined />} />
    </Header>
  );
};

export default SlackHeader;
