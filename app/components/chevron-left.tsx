import { SVGProps } from "react";
const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <path stroke="#fff" strokeWidth={2} d="M14.657 17.314 9 11.657 14.657 6" />
  </svg>
);
export { ChevronLeft };
