import React from "react";
import { Card, Space, Typography, Select, DatePicker } from "antd";
const { RangePicker } = DatePicker;
import LineChart from "./LineChart";
import OverviewCard from "./OverviewCard";
import CandidateFlow from "./CandidateFlow";
import { options, styles } from "../utils/constants";
import dayjs from "dayjs";

const OpportunityOverview: React.FC = () => {
  const handleChange = (value: string) => {
    console.log(value);
  };
  return (
    <div style={{ height: "auto", marginTop: "32px", paddingInline: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          style={{ ...styles.heading, color: "#1D4ED8", marginBottom: "24px" }}
        >
          Opportunity Overview
        </Typography>
        <div>
          <Select
            size="small"
            style={{
              ...styles.text_semibold,
              backgroundColor: "transparent",
              fontWeight: 500,
            }}
            defaultValue="London Internship Program"
            onChange={handleChange}
            options={options}
          />
          <RangePicker size="small" />
        </div>
      </div>
      <Space direction="vertical" size={24} style={{ marginRight: "48px" }}>
        <div style={{ display: "flex", gap: "32px" }}>
          <OverviewCard
            name="Applied"
            stats={3122}
            change={1590}
            percent={15}
            position={"left"}
            direction="up"
            width={"218px"}
          />
          <OverviewCard
            name="Offer"
            stats={183}
            change={71}
            percent={15}
            position={"left"}
            direction="up"
            width={"218px"}
          />
          <OverviewCard
            name="Hired"
            stats={98}
            change={167}
            percent={15}
            position={"left"}
            direction="down"
            width={"218px"}
          />
        </div>
        <Card>
          <LineChart />
        </Card>
      </Space>
      <Space direction={"vertical"} size={24}>
        <CandidateFlow candidate={4567} percent={78} />
        <div style={{ display: "flex", gap: "32px" }}>
          <OverviewCard
            name="Recommended"
            stats={2164}
            change={90}
            percent={15}
            position={"right"}
            direction="up"
            width={"253px"}
          />
          <OverviewCard
            name="Hired"
            stats={443}
            change={90}
            percent={15}
            position={"right"}
            direction="up"
            width={"253px"}
          />
        </div>
      </Space>
    </div>
  );
};
export default OpportunityOverview;
