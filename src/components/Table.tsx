import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";

interface DataType {
  key: string;
  applied: number;
  status: string;
  recommended: number;
  offer: number;
  interview: number;
  hired: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: " Opportunity Name",
    dataIndex: "name",
    key: "name",
    fixed: "left",
    render: (_, record) => (record.key === "1" ? "UX Internship" : "Marketing"),
    onCell: (record) => ({
      rowSpan: record.key === "1" ? 3 : 0,
    }),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => (
      <>
        <Tag color={status === "Active" ? "geekblue" : "volcano"} key={status}>
          {status.toUpperCase()}
        </Tag>
      </>
    ),
  },
  {
    title: "Applied",
    dataIndex: "applied",
    key: "applied",
  },
  {
    title: "Recommended",
    key: "recommended",
    dataIndex: "recommended",
  },
  {
    title: "Interview",
    dataIndex: "interview",
    key: "interview",
  },
  {
    title: "Offer",
    dataIndex: "offer",
    key: "offer",
  },
  {
    title: "Hired",
    dataIndex: "hired",
    key: "hired",
  },
];

const data: DataType[] = [
  {
    key: "1",
    status: "Active",
    applied: 27,
    recommended: 10,
    interview: 5,
    offer: 3,
    hired: 1,
  },
  {
    key: "2",
    status: "Disqualified",
    applied: 27,
    recommended: 10,
    interview: 5,
    offer: 3,
    hired: 1,
  },
  {
    key: "3",
    status: "Sub Total",
    applied: 27,
    recommended: 10,
    interview: 5,
    offer: 3,
    hired: 1,
  },
];

const TableOverview: React.FC = () => (
  <Table columns={columns} dataSource={data} pagination={false} bordered />
);

export default TableOverview;
