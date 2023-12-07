import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { StudentI } from '../types';

interface StudentsContextPropsI {
  studentsList: StudentI[];
  setStudentsList: Dispatch<SetStateAction<StudentI[]>>;
}

const StudentsContext = createContext<StudentsContextPropsI | undefined>(undefined);

const StudentsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [studentsList, setStudentsList] = useState<StudentI[]>([]);

  const value: StudentsContextPropsI = {
    studentsList,
    setStudentsList,
  };

  return <StudentsContext.Provider value={value}>{children}</StudentsContext.Provider>;
};

const useStudentsContext = (): StudentsContextPropsI => {
  const context = useContext(StudentsContext);
  if (!context) {
    throw new Error('useStudentsContext must be used within a StudentsProvider');
  }
  return context;
};

export { StudentsProvider, useStudentsContext };
