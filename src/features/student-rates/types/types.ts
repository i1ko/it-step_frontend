import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export interface StudentI {
  id: number;
  name: string;
  middle_name: string;
  surname: string;
  mean_grade: number;
}
