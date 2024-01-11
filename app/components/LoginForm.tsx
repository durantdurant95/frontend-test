"use client";
import useUserStore from "@/store/useUserStore";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FieldType = {
  email?: string;
  password?: string;
};

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const setUser = useUserStore.use.setUser();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    setUser(values);

    // Simulate loading state
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/");
    }, 2000); // Adjust the delay as needed
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="login"
      layout="vertical"
      labelCol={{ span: 8 }}
      style={{ width: 500, gap: 20, display: "flex", flexDirection: "column" }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Por favor introduzca su email" },
          { type: "email", message: "Este no es un email válido" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Por favor introduzca su contraseña" },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button
          loading={loading}
          block
          size="large"
          type="primary"
          htmlType="submit"
        >
          Iniciar sesión
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
