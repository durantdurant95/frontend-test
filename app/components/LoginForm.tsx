"use client";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";

type FieldType = {
  email?: string;
  password?: string;
};

const LoginForm = () => {
  const router = useRouter();
  const onFinish = async (values: FieldType) => {
    console.log("Success:", values);
    //navigate to home
    router.push("/home");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="login"
      layout="vertical"
      labelCol={{ span: 8 }}
      style={{ width: 400, gap: 16, display: "flex", flexDirection: "column" }}
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
          //   loading={loading}
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
