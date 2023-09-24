import React from "react";
import { Card, Space } from "antd";

import LineChart from "./LineChart";
import OverviewCard from "./OverviewCard";
import CandidateFlow from "./CandidateFlow";
const OpportunityOverview: React.FC = () => {
  return (
    <div style={{ height: "auto", marginTop: "32px" }}>
      <div>Opportunity Overview</div>
      <Space direction="vertical" size={24} style={{ marginRight: "32px" }}>
        <div style={{ display: "flex", gap: "32px" }}>
          <OverviewCard
            name="Applied"
            stats={3122}
            change={1590}
            percent={15}
            position={"left"}
          />
          <OverviewCard
            name="Offer"
            stats={183}
            change={71}
            percent={15}
            position={"left"}
          />
          <OverviewCard
            name="Hired"
            stats={98}
            change={167}
            percent={15}
            position={"left"}
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
          />
          <OverviewCard
            name="Hired"
            stats={443}
            change={90}
            percent={15}
            position={"right"}
          />
        </div>
      </Space>
    </div>
  );
};
export default OpportunityOverview;
