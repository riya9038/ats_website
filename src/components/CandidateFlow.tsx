import React from "react";
import { Typography, Space, Progress, Card } from "antd";
import TableFlow from "./TableFlow";
import { CandidateDataType } from "../utils/types";

const CandidateFlow: React.FC<CandidateDataType> = ({
  candidate,
  percent,
}: CandidateDataType) => {
  return (
    <Card style={{ width: "500px" }}>
      <Space direction="vertical" size={16} style={{ width: "100%" }}>
        <Typography>Total Candidate Flow</Typography>
        <Typography>{candidate}</Typography>
        <div>
          <Progress
            percent={100}
            success={{ percent: percent }}
            showInfo={false}
            status="active"
            strokeColor={{ from: "red", to: "yellow" }}
          />
          <div style={{ display: "flex" }}>
            <Typography style={{ width: `${percent}%` }}>
              Qualified {percent}%
            </Typography>
            <Typography style={{ width: `${100 - percent}%` }}>
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
