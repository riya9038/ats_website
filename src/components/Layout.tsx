import React, { useState } from "react";
import {
  FileOutlined,
  TeamOutlined,
  HomeOutlined,
  CalendarOutlined,
  ShareAltOutlined,
  BookOutlined,
  SettingOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, ConfigProvider } from "antd";
import OpportunityOverview from "./OpportunityOverview";
import DetailedOverview from "./DetailedOverview";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <HomeOutlined />),
  getItem("Team", "sub1", <TeamOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),

  getItem("Calender", "6", <CalendarOutlined />),
  getItem("Refer", "7", <ShareAltOutlined />),
  getItem("Files", "8", <FileOutlined />),
  getItem("Notebook", "9", <BookOutlined />),
  getItem("Likes", "10", <HeartOutlined />),
  getItem("Settings", "11", <SettingOutlined />),
  getItem(
    "Logo",
    "12",
    <div
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        backgroundColor: "#B1CDFD",
        textAlign: "center",
        fontSize: "10px",
        fontWeight: 600,
        display: "flex",
        justifyContent: "center",
      }}
    >
      RA
    </div>
  ),
];

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Poppins",
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "0 16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "32px",
            }}
          >
            <OpportunityOverview />
            <DetailedOverview />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
