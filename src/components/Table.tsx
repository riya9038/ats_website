import { Table } from "antd";
import React from "react";
import { columnsTableOverview, dataTableOverview } from "../utils/constants";

const TableOverview: React.FC = () => (
  <Table
    columns={columnsTableOverview}
    dataSource={dataTableOverview}
    pagination={false}
    bordered
  />
);

export default TableOverview;
