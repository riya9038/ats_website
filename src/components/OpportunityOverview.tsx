import React from "react";
import { Card, Space, Typography, Select, DatePicker } from "antd";
const { RangePicker } = DatePicker;
import LineChart from "./LineChart";
import OverviewCard from "./OverviewCard";
import CandidateFlow from "./CandidateFlow";
import { headerOptions, options, styles } from "../utils/constants";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY/MM/DD";

const OpportunityOverview: React.FC<boolean> = ({ collapsed }: boolean) => {
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
              backgroundColor: "none",
            }}
            defaultValue="London Internship Program"
            onChange={handleChange}
            options={headerOptions}
            bordered={false}
          />
          <RangePicker
            size="small"
            defaultValue={[
              dayjs("2015/01/01", dateFormat),
              dayjs("2015/01/01", dateFormat),
            ]}
            format={dateFormat}
            style={{
              ...styles.text_regular,
              backgroundColor: "#F0F3FB",
              borderRadius: "16px",
              padding: "4px 16px",
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Space
          direction="vertical"
          size={24}
          style={{
            maxWidth: collapsed ? "" : "640px",
          }}
        >
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
          <Card style={{ minHeight: "375px" }}>
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
    </div>
  );
};
export default OpportunityOverview;
