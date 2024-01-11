"use client";
import useUserStore from "@/store/useUserStore";
import { Flex, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { Title } = Typography;

  const router = useRouter();
  const user = useUserStore.use.user();

  useEffect(() => {
    if (user === null) {
      router.push("/auth");
    }
  }, [user, router]);
  return (
    <main>
      <Flex
        vertical
        justify="center"
        align="center"
        style={{ height: "100vh" }}
      >
        <Title>Usuario autenticado</Title>
      </Flex>
    </main>
  );
}
