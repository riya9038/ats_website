import React from "react";
import { Card, Space, Typography } from "antd";

import LineChart from "./LineChart";
import OverviewCard from "./OverviewCard";
import CandidateFlow from "./CandidateFlow";
const ProgramOverview: React.FC = () => {
  return (
    <div style={{ height: "auto", marginTop: "32px" }}>
      <div>Program Overview-Google</div>
      <div>
        {" "}
        <Typography>UX Internship</Typography>
        <Space direction="vertical" size={24} style={{ marginRight: "32px" }}>
          <div style={{ display: "flex", gap: "32px" }}>
            <OverviewCard
              name="Applied"
              stats={95}
              change={59}
              percent={15}
              position={"left"}
            />
            <OverviewCard
              name="Offer"
              stats={33}
              change={71}
              percent={15}
              position={"left"}
            />
            <OverviewCard
              name="Hired"
              stats={9158}
              change={67}
              percent={15}
              position={"left"}
            />
          </div>
          <Card>
            <LineChart />
          </Card>
        </Space>
        <Space direction={"vertical"} size={24}>
          <CandidateFlow candidate={27} percent={52} />
          <div style={{ display: "flex", gap: "32px" }}>
            <OverviewCard name="Recommended" stats={57} position={"right"} />
            <OverviewCard
              name="Hired"
              stats={39}
              change={90}
              percent={15}
              position={"right"}
            />
          </div>
        </Space>
      </div>
      <div>
        {" "}
        <Typography>Art Internship</Typography>
        <Space direction="vertical" size={24} style={{ marginRight: "32px" }}>
          <div style={{ display: "flex", gap: "32px" }}>
            <OverviewCard name="Applied" stats={3122} position={"left"} />
            <OverviewCard
              name="Offer"
              stats={23}
              change={71}
              percent={15}
              position={"left"}
            />
            <OverviewCard
              name="Hired"
              stats={118}
              change={67}
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
    </div>
  );
};
export default ProgramOverview;
