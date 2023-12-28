import { SVGProps } from "react";
const Instagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={13}
    fill="none"
    {...props}
  >
    <path
      fill="#8668F5"
      d="M12 3.86v5.28a3.365 3.365 0 0 1-3.36 3.36H3.36A3.364 3.364 0 0 1 0 9.14V3.86A3.364 3.364 0 0 1 3.36.5h5.28A3.364 3.364 0 0 1 12 3.86ZM8.88 6.5a2.88 2.88 0 1 0-5.76 0 2.88 2.88 0 0 0 5.76 0Zm.96-3.12a.72.72 0 1 0-1.44 0 .72.72 0 0 0 1.44 0Z"
    />
    <path
      fill="#8668F5"
      d="M6 8.25a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z"
    />
  </svg>
);
export { Instagram };
