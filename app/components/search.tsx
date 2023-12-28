import { SVGProps } from "react";
const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={12}
    fill="none"
    {...props}
  >
    <ellipse
      cx={5.028}
      cy={5.364}
      stroke="#fff"
      strokeWidth={1.5}
      rx={4.028}
      ry={3.864}
    />
    <path stroke="#fff" strokeWidth={1.5} d="M7.156 8.318 10 11.5" />
  </svg>
);
export { Search };
