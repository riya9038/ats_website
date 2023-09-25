import React from "react";
import { Typography, Space, Progress, Card } from "antd";
import TableFlow from "./TableFlow";
import { CandidateDataType } from "../utils/types";
import { styles } from "../utils/constants";

const CandidateFlow: React.FC<CandidateDataType> = ({
  candidate,
  percent,
}: CandidateDataType) => {
  return (
    <Card style={{ width: "535px" }}>
      <Space direction="vertical" size={16} style={{ width: "100%" }}>
        <Typography style={styles.text_semibold}>
          Total Candidate Flow
        </Typography>
        <Typography style={{ ...styles.text_semibold, fontSize: "20px" }}>
          {candidate}
        </Typography>
        <div>
          <Progress
            percent={100}
            success={{ percent: percent }}
            showInfo={false}
            status="active"
            strokeColor={{ from: "red", to: "yellow" }}
          />
          <div style={{ display: "flex" }}>
            <Typography
              style={{
                width: `${percent}%`,
                fontSize: "8px",
                fontWeight: 275,
                color: "C2C2C2",
              }}
            >
              Qualified {percent}%
            </Typography>
            <Typography
              style={{
                width: `${100 - percent}%`,
                fontSize: "8px",
                fontWeight: 275,
                color: "C2C2C2",
              }}
            >
              Disqualified {100 - percent}%
            </Typography>
          </div>
        </div>
        <TableFlow />
      </Space>
    </Card>
  );
};
export default CandidateFlow;
