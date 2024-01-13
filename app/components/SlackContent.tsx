import { Layout } from "antd";
import ChannelsContainer from "./ChannelsContainer";
import MessagesContainer from "./MessagesContainer";

const contentStyle: React.CSSProperties = {
  display: "flex",
};

const SlackContent = () => {
  const { Content } = Layout;
  return (
    <Content style={contentStyle}>
      <ChannelsContainer />
      <MessagesContainer />
    </Content>
  );
};

export default SlackContent;
