import React from "react";
import { Card, Typography, Tag, Space } from "antd";
import { OverviewDataType } from "../utils/types";
import { styles } from "../utils/constants";
import { Trending_UpIcon } from "../assets/trending_up";
import { Trending_DownIcon } from "../assets/trending_down";

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
      <Space direction="vertical" style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: position === "left" ? "column" : "row",
            gap: "16px",
            alignItems: position === "left" ? "flex-start" : "center",
            justifyContent: position === "right" ? "space-between" : "",
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
          <div style={{ display: "flex", gap: "8px" }}>
            <Typography style={styles.text_light}>{change}</Typography>{" "}
            <Tag
              icon={
                <div
                  style={{
                    width: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {direction === "down" ? (
                    <Trending_DownIcon />
                  ) : (
                    <Trending_UpIcon />
                  )}
                </div>
              }
              color={direction === "up" ? "#F0F6FF" : "#FFF3F0"}
              style={{
                ...styles.text_light,
                fontSize: "10px",
                width: "35px",
                borderRadius: "16px",
                color: "black",
                display: "flex",
                gap: "4px",
                justifyContent: "center",
                padding: "0px 24px",
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
