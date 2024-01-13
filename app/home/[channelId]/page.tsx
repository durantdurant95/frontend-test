"use client";
import { useChannelStore } from "@/zustand/useChannels";
import { SendOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Tooltip } from "antd";
import { useState } from "react";
import styles from "./MessageContainer.module.css";

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  width: "100%",
  padding: 10,
};

const MessageContainer = ({ params }: { params: { channelId: string } }) => {
  const channels = useChannelStore.use.channels();
  const channel = channels.find(
    (channel) => channel.id === Number(params.channelId)
  );
  const messages = channel?.messages || [];
  const addMessage = useChannelStore.use.addMessage();
  const deleteMessage = useChannelStore.use.deleteMessage();

  const [newMessage, setNewMessage] = useState("");

  return (
    <div style={containerStyle}>
      {messages.map((message) => (
        <Tooltip
          trigger={["click"]}
          color="white"
          overlayInnerStyle={{
            padding: 0,
          }}
          title={
            <Button
              type="primary"
              danger
              onClick={() => {
                if (message.dateCreated) {
                  deleteMessage(Number(params.channelId), message.dateCreated);
                }
              }}
            >
              Delete
            </Button>
          }
          key={message.dateCreated?.toISOString()}
          placement="topRight"
          arrow={false}
        >
          <div className={styles.messageContainer}>
            <Avatar icon={<UserOutlined />} shape="square" />
            {/* Display the first letter of the author's name as the avatar */}
            <div
              style={{
                marginLeft: "10px",
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <span style={{ fontSize: 12 }}>
                {message.author}{" "}
                <span
                  style={{
                    fontSize: 10,
                    color: "gray",
                    marginLeft: 10,
                  }}
                >
                  {message.dateCreated?.toDateString()}
                </span>
              </span>
              <span style={{ fontSize: 14 }}>{message.content}</span>
            </div>
          </div>
        </Tooltip>
      ))}
      <Input.Search
        placeholder="Type a message..."
        enterButton={<SendOutlined />}
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onSearch={(value) => {
          console.log(value);
          setNewMessage("");
          addMessage(
            Number(params.channelId),
            {
              content: value,
              author: "You",
            },
            "You"
          );
        }}
        size="large"
        style={{
          width: "100%",
        }}
      />
    </div>
  );
};

export default MessageContainer;
