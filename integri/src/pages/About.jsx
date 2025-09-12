import React from "react";
import { CommonTable } from "@your-org/design-system";
import { useState } from "react";
import BodyWrapper from "../components/BodyWrapper";

function About() {
  const [rowsCount, setRowsCount] = useState(10);
  const [page, setPage] = useState(0);
    const columns = ["NAME", "EMAIL ID", "ROLES", "STATUS", "ACTION"];
  
    const tableData = [
      {
        name: "SAVANNAH NGUYEN",
        email: "manhhachkt08@gmail.com",
        roles: ["Organization Admin"],
        status: "Active",
      },
      {
        name: "JANE COOPER",
        email: "vuhaithuongnute@gmail.com",
        roles: ["Module Admin"],
        status: "Active",
      },
      {
        name: "KATHRYN MURPHY",
        email: "nvt.isst.nute@gmail.com",
        roles: ["Module Admin"],
        status: "Active",
        locked: true,
      },
      {
        name: "ROBERT FOX",
        email: "binhan628@gmail.com",
        roles: ["Operations Team", "Module Admin"],
        status: "Active",
      },
      {
        name: "JEROME BELL",
        email: "tienlapspktnd@gmail.com",
        roles: ["Operations Team"],
        status: "Inactive",
      },
      {
        name: "JENNY WILSON",
        email: "trungkienspktnd@gmail.com",
        roles: ["Organization Admin"],
        status: "Active",
      },
      {
        name: "ALBERT FLORES",
        email: "deanna.curtis@example.com",
        roles: ["Module Admin"],
        status: "Active",
      },
      {
        name: "RONALD RICHARDS",
        email: "curtis.weaver@example.com",
        roles: ["Read only"],
        status: "Inactive",
      },
      {
        name: "ROBERT FOX",
        email: "michael.mitc@example.com",
        roles: ["Read only"],
        status: "Active",
      },
    ];
  return (
    <>
      <BodyWrapper>
        <CommonTable
          length={20}
          setPage={setPage}
          page={page}
          rowsCount={rowsCount}
          tableData={tableData}
          columns={columns}
        />
      </BodyWrapper>
    </>
  );
}

export default About;
