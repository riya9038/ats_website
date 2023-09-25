import React from "react";
import { Card, Typography, Tag, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { OverviewDataType } from "../utils/types";
import { styles } from "../utils/constants";
import { Trending_UpIcon } from "../assets/trending_up";

const OverviewCard: React.FC<OverviewDataType> = ({
  name,
  stats,
  change,
  percent,
  position,
  direction,
  width,
}: OverviewDataType) => {
  return (
    <Card style={{ width: width, height: "auto", padding: "0px 8px" }}>
      <Space direction="vertical">
        <div
          style={{
            display: "flex",
            flexDirection: position === "left" ? "column" : "row",
            gap: "16px",
            alignItems: position === "left" ? "flex-start" : "center",
          }}
        >
          <Typography style={styles.text_semibold}>{name}</Typography>
          <Typography
            style={{
              ...styles.text_semibold,
              margin: 0,
              fontSize: position === "left" ? "20px" : "15px",
            }}
          >
            {stats}
          </Typography>
        </div>
        <div>
          <Typography style={styles.text_regular}>Previous Period</Typography>
          <div style={{ display: "flex" }}>
            <Typography style={styles.text_light}>{change}</Typography>{" "}
            <Tag
              icon={<img src="../assets/trending_up.tsx" />}
              color={direction === "up" ? "#F0F6FF" : "#FFF3F0"}
              style={{
                ...styles.text_light,
                fontSize: "10px",
                width: "35px",
                borderRadius: "16px",
                color: "black",
                display: "flex",
                gap: "4px",
              }}
            >
              {percent}%
            </Tag>
          </div>
        </div>
      </Space>
    </Card>
  );
};
export default OverviewCard;
