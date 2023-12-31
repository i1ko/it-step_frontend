import React, {useState, useRef, useCallback} from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import toast from "react-hot-toast";
import { SearchIcon } from "./icons/search-icon";
import { PlusIcon } from "./icons/plus-icon";
import {fetchJson, HttpMethod} from "../../../lib/fetch";
import {CREATE_STUDENT} from "../data/constants";
import {CreateStudentResponseI} from "../types";
import {useStudentsContext} from "../context/students-context";
import {getAllStudents} from "../api/requests";

const TableBar = () => {
  const { setStudentsList } = useStudentsContext();

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [filterValue, setFilterValue] = useState("");
  const surnameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const middleNameRef = useRef<HTMLInputElement>(null);

  const onClear = useCallback(() => {
    setFilterValue("");
  }, []);

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
    } else {
      setFilterValue("");
    }
  }, []);

  const onAddStudent = () => {
    const surnameValue = surnameRef.current?.value || "";
    const nameValue = nameRef.current?.value || "";
    const middleNameValue = middleNameRef.current?.value || "";

    console.log("Surname:", surnameValue);
    console.log("Name:", nameValue);
    console.log("Middle Name:", middleNameValue);

    (async () => {
      try {
        const res = await fetchJson<CreateStudentResponseI>(CREATE_STUDENT.route, {
          method: CREATE_STUDENT.method as HttpMethod,
          body: {
            name: nameValue,
            surname: surnameValue,
            middle_name: middleNameValue
          }
        });
        if (res?.success) {
          toast.success(`Студент з ІД ${res?.id} створено`);
          getAllStudents(setStudentsList);
          return;
        } else {
          console.error(res);
          toast.error('Щось пішло не так. Подивіться консоль для отримання інформації про помилку');
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error('Щось пішло не так. Подивіться консоль для отримання інформації про помилку');
      }
    })();

    onClose();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-3 items-end">
        <Input
          isClearable
          className="w-full sm:max-w-[44%]"
          placeholder="Пошук студента"
          startContent={<SearchIcon />}
          value={filterValue}
          onClear={() => onClear()}
          onValueChange={onSearchChange}
        />
        <Button color="primary" startContent={<PlusIcon />} onPress={onOpen}>
          Додати студента
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Додавання студента</ModalHeader>
                <ModalBody>
                  <Input
                    id="surname"
                    required
                    autoFocus
                    label="Прізвище"
                    placeholder="Введіть прізвище студента"
                    variant="bordered"
                    ref={surnameRef}
                  />
                  <Input
                    id="name"
                    required
                    label="Імʼя"
                    placeholder="Введіть імʼя студента"
                    variant="bordered"
                    ref={nameRef}
                  />
                  <Input
                    id="middle_name"
                    required
                    label="По-батькові"
                    placeholder="Введіть по-батькові студента"
                    variant="bordered"
                    ref={middleNameRef}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Закрити
                  </Button>
                  <Button color="primary" onPress={onAddStudent}>
                    Додати
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default TableBar;
