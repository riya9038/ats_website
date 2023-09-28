import { TableFlowDataType, TableOverviewDataType } from "./types";
import type { ColumnsType } from "antd/es/table";

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
    render: (_, record) =>
      record.dataIndex === 0
        ? "UX Internship"
        : record.dataIndex === 3
        ? "Art Internship"
        : "UX Internship",
    onCell: (_, index) => ({
      rowSpan: index === 0 || index === 3 ? 3 : 0,
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
    dataIndex: 0,
    key: "1",
    status: "Active",
    applied: 20,
    recommended: 17,
    interview: 4,
    offer: 3,
    hired: 1,
  },
  {
    dataIndex: 1,
    key: "2",
    status: "Disqualified",
    applied: 7,
    recommended: 4,
    interview: 1,
    offer: 1,
    hired: 1,
  },
  {
    dataIndex: 2,
    key: "3",
    status: "Sub Total",
    applied: 27,
    recommended: 21,
    interview: 5,
    offer: 4,
    hired: 2,
  },
  {
    dataIndex: 3,
    key: "4",
    status: "Active",
    applied: 20,
    recommended: 17,
    interview: 4,
    offer: 3,
    hired: 1,
  },
  {
    dataIndex: 4,
    key: "5",
    status: "Disqualified",
    applied: 7,
    recommended: 4,
    interview: 1,
    offer: 1,
    hired: 1,
  },
  {
    dataIndex: 5,
    key: "6",
    status: "Sub Total",
    applied: 27,
    recommended: 21,
    interview: 5,
    offer: 4,
    hired: 2,
  },
];
export const headerOptions = [
  {
    label: "London Internship Program",
    value: "London Internship Program",
  },
  {
    label: "Berlin Internship Program",
    value: "Berlin Internship Program",
  },
];
export const options = [
  {
    label: "Applied",
    value: "applied",
  },
  {
    label: "Recommended",
    value: "recommended",
  },
  {
    label: "Interview",
    value: "interview",
  },
  {
    label: "Offer",
    value: "offer",
  },
  {
    label: "Hired",
    value: "hired",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
];

export const styles = {
  heading: {
    fontSize: "20px",
    fontWeight: 600,
  },
  text_light: {
    fontSize: "12px",
    fontWeight: 300,
  },
  text_regular: {
    fontSize: "12px",
    fontWeight: 400,
  },
  text_semibold: {
    fontSize: "15px",
    fontWeight: 500,
  },
  text_bold: {
    fontSize: "16px",
    fontWeight: 600,
  },
  text_bolder: {
    fontSize: "15px",
    fontWeight: 700,
  },
};
