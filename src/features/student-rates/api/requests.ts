import {fetchJson} from "../../../lib/fetch";
import {StudentI} from "../types";
import {GET_STUDENTS} from "../data/constants";

export const getAllStudents = async (setStudentsList: (newState: StudentI[]) => void): Promise<void> => {
  try {
    const res = await fetchJson<StudentI[]>(GET_STUDENTS.route);
    setStudentsList(res);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
