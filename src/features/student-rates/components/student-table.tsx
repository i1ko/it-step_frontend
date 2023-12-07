import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Chip,
  Tooltip
} from "@nextui-org/react";
import { columns, GET_STUDENTS } from "../data/constants";
import { fetchJson } from "../../../lib/fetch";
import {PlusIcon} from "./icons/plus-icon";
import {getColorForGrade} from "../utils/get-color-for-grade";
import {EditIcon} from "./icons/edit-icon";
import {DeleteIcon} from "./icons/delete-icon";
import {StudentI} from "../types";

const StudentTable: React.FC = () => {
  const [students, setStudents] = useState<StudentI[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchJson<StudentI[]>(GET_STUDENTS.route);
        setStudents(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    students?.length > 0
      ? <Table isHeaderSticky isStriped aria-label="Example static collection table">
        <TableHeader>
          {columns.map((column, index) => (
            // <TableColumn align={`${index >= 2 ? 'end' : 'start'}`} key={column.uid + index}>{column.name.toUpperCase()}</TableColumn>
            <TableColumn align={`end`} key={column.uid + index}>{column.name.toUpperCase()}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{`${student.surname} ${student.name} ${student.middle_name}`}</TableCell>
              <TableCell>
                <Chip className="capitalize" color={getColorForGrade(student.mean_grade)} size="sm" variant="flat">
                  {student.mean_grade}
                </Chip>
              </TableCell>
              <TableCell className="flex justify-end">
                {/*<div>*/}
                  <Button isIconOnly variant="light" className="text-[#006FEE]">
                    <PlusIcon />
                  </Button>
                {/*</div>*/}
              </TableCell>
              <TableCell>
                <div className="relative flex items-center justify-end gap-[8px]">
                  <Tooltip content="Редагувати користувача">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <Button isIconOnly variant="light">
                        <EditIcon />
                      </Button>
                    </span>
                  </Tooltip>
                  <Tooltip color="danger" content="Видалити користувача">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                      <Button isIconOnly variant="light" color="danger">
                        <DeleteIcon />
                      </Button>
                    </span>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      : null
  );
};

export default StudentTable;
