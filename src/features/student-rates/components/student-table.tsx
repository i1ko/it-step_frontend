import React, { useEffect } from "react";
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
import toast from "react-hot-toast";
import {fetchJson, HttpMethod} from "../../../lib/fetch";
import {PlusIcon} from "./icons/plus-icon";
import {getColorForGrade} from "../utils/get-color-for-grade";
import {EditIcon} from "./icons/edit-icon";
import {DeleteIcon} from "./icons/delete-icon";
import {columns, DELETE_STUDENT} from "../data/constants";
import {DeleteStudentResponseI, StudentI} from "../types";
import {getAllStudents} from "../api/requests";
import {useStudentsContext} from "../context/students-context";

const StudentTable: React.FC = () => {
  const { studentsList, setStudentsList } = useStudentsContext();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        await getAllStudents(setStudentsList);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);


  const onDeleteStudent = async (id: number) => {
    try {
      const res = await fetchJson<DeleteStudentResponseI>(
        DELETE_STUDENT.route + '/' + id,
        {
          method: DELETE_STUDENT.method as HttpMethod
        }
      );
      // setStudents(res);
      if (res?.success) {
        toast.success(`Інформацію про студента з ІД ${id} успішно видалено`);
        getAllStudents(setStudentsList);
      } else {
        toast.error(`Інформацію про студента з ІД ${id} не вдалось видалити. Перевірте консоль`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error(`Інформацію про студента з ІД ${id} не вдалось видалити. Перевірте консоль`);
    }
  }

  return (
    studentsList?.length > 0
      ? <Table isHeaderSticky isStriped aria-label="Example static collection table">
        <TableHeader>
          {columns.map((column, index) => (
            // <TableColumn align={`${index >= 2 ? 'end' : 'start'}`} key={column.uid + index}>{column.name.toUpperCase()}</TableColumn>
            <TableColumn align={`end`} key={column.uid + index}>{column.name.toUpperCase()}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {studentsList.map((student: StudentI) => (
            <TableRow key={student.id}>
              <TableCell>{`${student.surname} ${student.name} ${student.middle_name}`}</TableCell>
              <TableCell>
                <Chip className="capitalize" color={getColorForGrade(student.mean_grade)} size="sm" variant="flat">
                  {student?.mean_grade
                    ? student.mean_grade
                    : 'Немає'
                  }
                </Chip>
              </TableCell>
              <TableCell className="flex justify-end">
                <Button isIconOnly variant="light" className="text-[#006FEE]">
                  <PlusIcon />
                </Button>
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
                      <Button isIconOnly variant="light" color="danger" onPress={() => onDeleteStudent(student.id)}>
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
