"use client";

import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Dropdown, MenuProps, Space } from "antd";
import React from "react";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.slack.com">
        Your workspace is currently on <br /> Slack&apos;s Bussiness+ Plan{" "}
        <span style={{ color: "purple" }}>Learn more</span>
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.slack.com">
        Invite people to your company
      </a>
    ),
  },
  {
    key: "3",
    label: "Preferences",
  },
  {
    key: "4",
    label: "Tools & settings",
    children: [
      {
        key: "4-1",
        label: "Customize Workspace",
      },
      {
        key: "4-2",
        label: "Workflow Builder",
      },
      {
        key: "4-3",
        label: "Manage Apps",
      },
    ],
  },
  {
    key: "5",
    label: "Sign out of Slack",
  },
];

const CompanyDropdown = () => {
  const contentStyle: React.CSSProperties = {
    backgroundColor: "fff",
  };

  const menuStyle: React.CSSProperties = {
    boxShadow: "none",
    borderRadius: "0px 0px 10px 10px",
  };
  return (
    <Dropdown
      menu={{ items }}
      dropdownRender={(menu) => (
        <div style={contentStyle}>
          <Space
            style={{
              backgroundColor: "#fff",
              width: "100%",
              borderRadius: "10px 10px 0px 0px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 8,
                padding: 8,
                alignItems: "center",
              }}
            >
              <Avatar icon={<UserOutlined />} shape="square" />
              <div>
                <strong>Your Company</strong>
                <div>Email</div>
              </div>
            </div>
          </Space>
          <Divider style={{ margin: 0 }} />
          {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
        </div>
      )}
    >
      <Space>
        <h3>Your Company</h3>
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default CompanyDropdown;
