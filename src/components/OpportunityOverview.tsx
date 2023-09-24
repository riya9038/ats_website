import React from "react";
import { Row, Col, Card, Typography } from "antd";
import LineChart from "./LineChart";
const OpportunityOverview: React.FC = () => {
  return (
    <div style={{ height: "533px", marginTop: "32px" }}>
      <div>Opportunity Overview</div>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Card>
            <Typography.Title>Applied</Typography.Title>
          </Card>
        </Col>
        <Col span={4}>
          <Card>
            <Typography.Title>Applied</Typography.Title>
          </Card>
        </Col>
        <Col span={4}>
          <Card>
            <Typography.Title>Applied</Typography.Title>
          </Card>
        </Col>
        <Col span={12}>
          <Card></Card>
        </Col>
        <Col span={12}>
          <Card>
            <LineChart />
          </Card>
        </Col>
        <Col span={6}>
          <Card></Card>
        </Col>
        <Col span={6}>
          <Card></Card>
        </Col>
      </Row>
    </div>
  );
};
export default OpportunityOverview;
