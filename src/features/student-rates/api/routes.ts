import {fetchJson} from "../../../lib/fetch";
import {GET_STUDENTS_ROUTE} from "../data/constants";
import {StudentI} from "../types";

const GET_STUDENTS = fetchJson<StudentI[]>(GET_STUDENTS_ROUTE);
