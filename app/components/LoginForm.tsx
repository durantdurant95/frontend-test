"use client";
import { useUserStore } from "@/zustand/useUser";
import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FieldType = {
  email?: string;
  password?: string;
};

const LoginForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const email = useUserStore.use.email();
  const password = useUserStore.use.password();

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Wrong email or password",
    });
  };

  const onFinish = async (values: FieldType) => {
    console.log("Success:", values);
    setIsLoading(true);
    if (!values.email || !values.password) {
      return;
    }

    // Compare entered email and password with stored email and password
    if (values.email === email && values.password === password) {
      // If they match, navigate to home
      setTimeout(() => {
        router.push("/home");
        setIsLoading(false);
      }, 2000);
    } else {
      // If they don't match, show an error message
      console.error("Invalid email or password");
      error();
      setIsLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {contextHolder}
      <Form
        name="login"
        layout="vertical"
        labelCol={{ span: 8 }}
        style={{
          width: 400,
          gap: 16,
          display: "flex",
          flexDirection: "column",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "This is not a valid email" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            loading={isLoading}
            block
            size="large"
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
