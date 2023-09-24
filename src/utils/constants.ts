import { TableFlowDataType, TableOverviewDataType } from "./types";
import type { ColumnsType } from "antd/es/table";
// import { Tag } from "antd";

export const columnsTableFlow: ColumnsType<TableFlowDataType> = [
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Qualified",
    dataIndex: "qualified",
    key: "qualified",
  },
  {
    title: "Disqualified",
    key: "disqualified",
    dataIndex: "disqualified",
  },
];

export const dataTableFlow: TableFlowDataType[] = [
  {
    key: "1",
    status: "Applied",
    qualified: 3122,
    disqualified: 1445,
  },
  {
    key: "2",
    status: "Recommended",
    qualified: 2164,
    disqualified: 958,
  },
  {
    key: "3",
    status: "Interview",
    qualified: 443,
    disqualified: 1721,
  },
  {
    key: "4",
    status: "Offer",
    qualified: 183,
    disqualified: 260,
  },
  {
    key: "5",
    status: "Hired",
    qualified: 118,
    disqualified: 65,
  },
];

export const columnsTableOverview: ColumnsType<TableOverviewDataType> = [
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

export const dataTableOverview: TableOverviewDataType[] = [
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
