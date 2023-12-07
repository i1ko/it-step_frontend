import React, { useState, useRef } from "react";
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
import { SearchIcon } from "./icons/search-icon";
import { PlusIcon } from "./icons/plus-icon";

const TableBar = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [filterValue, setFilterValue] = useState("");
  const surnameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const middleNameRef = useRef<HTMLInputElement>(null);

  const onClear = React.useCallback(() => {
    setFilterValue("");
  }, []);

  const onSearchChange = React.useCallback((value?: string) => {
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
                  <form id="student_creating">
                    <Input
                      id="surname"
                      form="student_creating"
                      required
                      autoFocus
                      label="Прізвище"
                      placeholder="Введіть прізвище студента"
                      variant="bordered"
                      ref={surnameRef}
                    />
                    <Input
                      id="name"
                      form="student_creating"
                      required
                      label="Імʼя"
                      placeholder="Введіть імʼя студента"
                      variant="bordered"
                      ref={nameRef}
                    />
                    <Input
                      id="middle_name"
                      form="student_creating"
                      required
                      label="По-батькові"
                      placeholder="Введіть по-батькові студента"
                      variant="bordered"
                      ref={middleNameRef}
                    />
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Закрити
                  </Button>
                  <Button form="student_creating" color="primary" onPress={onAddStudent}>
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
