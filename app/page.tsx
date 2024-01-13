"use client";
import { Flex, Typography } from "antd";
import LoginForm from "./components/LoginForm";

export default function Home() {
  const { Title } = Typography;
  return (
    <main>
      <Flex
        vertical
        justify="center"
        align="center"
        style={{ height: "100vh" }}
      >
        <Title level={1}>Login to Slack</Title>
        <p>
          We suggest using the <strong>email address you use at work.</strong>
        </p>
        <LoginForm />
      </Flex>
    </main>
  );
}
