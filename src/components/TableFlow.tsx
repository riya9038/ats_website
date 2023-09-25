import { Table, ConfigProvider } from "antd";
import React from "react";
import { columnsTableFlow, dataTableFlow } from "../utils/constants";

const TableFlow: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Table: {
          borderColor: "none",
          padding: 0,
          paddingContentVerticalLG: 8,
          headerBg: "white",
        },
      },
    }}
  >
    <Table
      columns={columnsTableFlow}
      dataSource={dataTableFlow}
      pagination={false}
      bordered={false}
    />
  </ConfigProvider>
);
export default TableFlow;
