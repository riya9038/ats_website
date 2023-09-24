import React from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Dropdown,
  Space,
  Button,
  MenuProps,
  message,
  Typography,
  Card,
} from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import TableOverview from "./Table";

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const DetailedOverview: React.FC = () => {
  return (
    <div>
      <div>Detailed Opportunity Overview</div>
      <Row gutter={32}>
        <Col span={12}>
          <Form.Item label="Field A">
            <Input placeholder="input placeholder" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Sort by
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Col>
        <Col span={6}>
          <Button>Export All CSVs</Button>
        </Col>
      </Row>
      <div
        style={{
          backgroundColor: "white",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "34px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography.Paragraph>Google</Typography.Paragraph>
          <UserOutlined />
          <UserOutlined />
        </div>
        <Row gutter={32}>
          <Col span={4}>
            <Card>
              <Typography>Applied</Typography>
              <Typography>95</Typography>
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Typography>Applied</Typography>
              <Typography>95</Typography>
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Typography>Applied</Typography>
              <Typography>95</Typography>
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Typography>Applied</Typography>
              <Typography>95</Typography>
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Typography>Applied</Typography>
              <Typography>95</Typography>
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Typography>Applied</Typography>
              <Typography>95</Typography>
            </Card>
          </Col>
        </Row>
        <TableOverview />
      </div>
    </div>
  );
};
export default DetailedOverview;
