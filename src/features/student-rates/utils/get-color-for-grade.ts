import {ChipProps} from "@nextui-org/react";

export const getColorForGrade = (grade: number | null): ChipProps["color"] => {
  const gradeColorConfig = {
    success: [10, 11, 12],
    primary: [7, 8, 9],
    warning: [4, 5, 6],
    danger: [1, 2, 3],
    default: [],
  };

  // @ts-ignore
  const color = Object.entries(gradeColorConfig).find(([_, grades]) => grades.includes(grade))?.[0] || "default";
  return color as ChipProps["color"];
};
