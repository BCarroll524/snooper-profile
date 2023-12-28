import { SVGProps } from "react";
const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeWidth={2}
      d="M8.343 17.314 14 11.657 8.343 6"
      opacity={0.2}
    />
  </svg>
);
export { ChevronRight };
