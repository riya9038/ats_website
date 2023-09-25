/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { columnsTableOverview, dataTableOverview } from "../utils/constants";

const TableOverview: React.FC<any> = ({ dataSource }: any) => {
  const [sortedData, setsortedData] = useState(dataTableOverview);
  useEffect(() => {
    console.log("hi", dataSource);
    if (dataSource) setsortedData([...dataSource]);
  }, [dataSource]);
  return (
    <Table
      columns={columnsTableOverview}
      dataSource={sortedData}
      pagination={false}
      bordered
    />
  );
};

export default TableOverview;
