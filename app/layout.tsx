import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slack Clone",
  description: "Slack Clone created with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6e46ae",
          colorInfo: "#6e46ae",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          {" "}
          <AntdRegistry>{children}</AntdRegistry>
        </body>
      </html>
    </ConfigProvider>
  );
}
