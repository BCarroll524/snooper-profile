import { SVGProps } from "react";
const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={7}
    fill="none"
    {...props}
  >
    <path stroke="#fff" strokeWidth={1.648} d="M10 .67 5.34 5.33.68.67" />
  </svg>
);
export { ChevronDown };
