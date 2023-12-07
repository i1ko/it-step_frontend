export const columns = [
  {name: "ПІБ студента", uid: "fullname"},
  {name: "Оцінка", uid: "grade"},
  {name: "Додати оцінку", uid: "addGrade"},
  {name: "Дії", uid: "actions"},
];
export const GET_STUDENTS = {
  route: '/student_grades'
};
export const CREATE_STUDENT = {
  route: '/student',
  method: 'POST'
};
export const UPDATE_STUDENT = {
  route: '/student',
  method: 'PUT'
};
export const DELETE_STUDENT = {
  route: '/student',
  method: 'DELETE'
};
export const ADD_STUDENT_GRADE = {
  route: '/grade',
  method: 'POST'
};
export const UPDATE_STUDENT_GRADE = {
  route: '/grade',
  method: 'PUT'
}
