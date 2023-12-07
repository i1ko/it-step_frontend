import { fetchJson } from '../../../lib/fetch';
import { GET_STUDENTS } from '../data/constants';
import { StudentI } from '../types';

export const getAllStudents = async (): Promise<StudentI[]> => {
  try {
    const res = await fetchJson<StudentI[]>(GET_STUDENTS.route);
    console.log(res);
    return res;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
