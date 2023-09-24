import React from "react";
import { Card, Typography, Tag, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { OverviewDataType } from "../utils/types";

const OverviewCard: React.FC<OverviewDataType> = ({
  name,
  stats,
  change,
  percent,
  position,
}: OverviewDataType) => {
  return (
    <Card style={{ width: "218px", height: "180px", padding: "0px 8px" }}>
      <Space direction="vertical" size={16}>
        <div
          style={{
            display: "flex",
            flexDirection: position === "left" ? "column" : "row",
            gap: "16px",
          }}
        >
          <Typography>{name}</Typography>
          <Typography style={{ margin: 0 }}>{stats}</Typography>
        </div>
        <div>
          <Typography>Previous Period</Typography>
          <div style={{ display: "flex" }}>
            <Typography>{change}</Typography>{" "}
            <Tag icon={<UserOutlined />} color="#55acee">
              {percent}%
            </Tag>
          </div>
        </div>
      </Space>
    </Card>
  );
};
export default OverviewCard;
