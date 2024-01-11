"use client";
import { Flex, Typography } from "antd";
import LoginForm from "../components/LoginForm";

export default function Auth() {
  const { Title } = Typography;
  return (
    <Flex vertical justify="center" align="center" style={{ height: "100vh" }}>
      <Title level={1}>Inicia sesión en Slack</Title>
      <p>
        Te sugerimos que uses la{" "}
        <span>dirección de correo que utilizas en el trabajo.</span>
      </p>
      <LoginForm />
    </Flex>
  );
}
