import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {columns} from "@/features/student-rates/data/constants";

const StudentTable = () => {

  return (
    <Table isStriped aria-label="Example static collection table">
      <TableHeader>
        {columns.map(column => (
          <TableColumn>{column.name}</TableColumn>
        ))}
        {/*<TableColumn>ПІБ СТУДЕНТА</TableColumn>*/}
        {/*<TableColumn>ОЦІНКА</TableColumn>*/}
        {/*<TableColumn>ДОДАТИ ОЦІНКУ</TableColumn>*/}
        {/*/!*<TableColumn>ДІЇ</TableColumn>*!/*/}
      </TableHeader>
      <TableBody>
        {}
        <TableRow key="1">
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>Vacation</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
export default StudentTable;
