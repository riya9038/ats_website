/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Typography, Card, Select } from "antd";
import TableOverview from "./Table";
import { Link } from "react-router-dom";
import { dataTableOverview, options, styles } from "../utils/constants";
import { SortIcon } from "../assets/sort";
import { DashboardIcon } from "../assets/dashboard";
import { DownloadIcon } from "../assets/download";
// import { ReactComponent as ReactIcon } from "../assets/react.svg";

const CardOverview = ({ name, count }: any) => {
  return (
    <Col span={4}>
      <Card
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Typography style={styles.text_light}>{name}</Typography>
        <Typography style={styles.text_semibold}>{count}</Typography>
      </Card>
    </Col>
  );
};
const DetailedOverview: React.FC = () => {
  const [dataSource, setDataSource] = useState(dataTableOverview);
  const [selectedValue, setselectedValue] = useState("");
  const [sortOrder, setsortOrder] = useState("ascend");

  const handleChange = (value: string) => {
    setselectedValue(value);
    const sortedData = dataTableOverview.sort(
      (a: any, b: any) => a[value] - b[value]
    );
    setDataSource([...sortedData]);
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    if (sortOrder === "ascend") setsortOrder("descend");
    else setsortOrder("ascend");
    const sortedData = dataTableOverview.sort((a: any, b: any) =>
      sortOrder === "ascend"
        ? a[selectedValue] - b[selectedValue]
        : b[selectedValue] - a[selectedValue]
    );
    setDataSource([...sortedData]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ ...styles.text_bold }}>Detailed Opportunity Overview</div>
      <Row gutter={32}>
        <Col>
          <Form.Item>
            <Input
              placeholder="Search by employer name"
              style={{ width: "720px", height: "48px", borderRadius: "8px" }}
            />
          </Form.Item>
        </Col>
        <Col>
          <div style={{ position: "relative" }}>
            <Select
              style={{ width: "253px", height: "48px" }}
              defaultValue="Sort by"
              onChange={handleChange}
              options={options}
            />
            <Button
              onClick={handleClick}
              style={{
                position: "absolute",
                right: "2px",
                height: "48px",
              }}
            >
              {" "}
              <SortIcon />
            </Button>
          </div>
        </Col>
        <Col>
          <Button
            style={{
              width: "253px",
              height: "48px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#0557E5",
            }}
          >
            Export All CSVs
          </Button>
        </Col>
      </Row>
      <div
        style={{
          backgroundColor: "white",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "34px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "40px",
          }}
        >
          <Typography style={{ ...styles.text_semibold, fontSize: "14px" }}>
            Google
          </Typography>
          <div style={{ display: "flex", gap: "8px" }}>
            <Link to="/program">
              <Button style={{ width: "40px", height: "40px", padding: "8px" }}>
                <DashboardIcon />
              </Button>
            </Link>
            <Button style={{ width: "40px", height: "40px", padding: "8px" }}>
              <DownloadIcon />
            </Button>
          </div>
        </div>
        <Row gutter={32}>
          <CardOverview name="Applied" count={95} />
          <CardOverview name="Recommended" count={57} />
          <CardOverview name="Interview" count={39} />
          <CardOverview name="Offer" count={33} />
          <CardOverview name="Hired" count={15} />
          <CardOverview name="Total Rejected" count={60} />
        </Row>
        <TableOverview dataSource={dataSource} />
      </div>
      <div
        style={{
          backgroundColor: "white",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "34px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography style={{ ...styles.text_semibold, fontSize: "14px" }}>
            Microsoft
          </Typography>
          <div style={{ display: "flex", gap: "8px" }}>
            <Link to="/program">
              <Button style={{ width: "40px", height: "40px", padding: "8px" }}>
                <DashboardIcon />
              </Button>
            </Link>
            <Button style={{ width: "40px", height: "40px", padding: "8px" }}>
              <DownloadIcon />
            </Button>
          </div>
        </div>
        <Row gutter={32}>
          <CardOverview name="Applied" count={95} />
          <CardOverview name="Recommended" count={57} />
          <CardOverview name="Interview" count={39} />
          <CardOverview name="Offer" count={33} />
          <CardOverview name="Hired" count={15} />
          <CardOverview name="Total Rejected" count={60} />
        </Row>
        <TableOverview dataSource={dataSource} />
      </div>
    </div>
  );
};
export default DetailedOverview;
