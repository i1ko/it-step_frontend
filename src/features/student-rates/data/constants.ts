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
export const DELETE_STUDENT = {
  route: '/student',
  method: 'DELETE'
};
