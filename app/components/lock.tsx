import { SVGProps } from "react";
const Lock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={13}
    fill="none"
    {...props}
  >
    <path
      fill="#8668F5"
      fillRule="evenodd"
      d="M.79 4.85a.5.5 0 0 1 .5-.5h6.554a.5.5 0 0 1 .5.5v5.65a.5.5 0 0 1-.5.5H1.29a.5.5 0 0 1-.5-.5V4.85Zm1 .5V10h5.554V5.35H1.79ZM4.566 1a1.73 1.73 0 0 0-1.73 1.73v1.264h-1V2.73a2.73 2.73 0 0 1 5.461 0v1.263h-1V2.73A1.73 1.73 0 0 0 4.567 1Z"
      clipRule="evenodd"
    />
    <path
      fill="#8668F5"
      fillRule="evenodd"
      d="M4.547 6.567a.446.446 0 1 0 0 .892.446.446 0 0 0 0-.892Zm-1.445.446a1.446 1.446 0 1 1 2.891 0 1.446 1.446 0 0 1-2.891 0Z"
      clipRule="evenodd"
    />
    <path
      fill="#8668F5"
      fillRule="evenodd"
      d="M4.047 9.279v-1.32h1v1.32h-1Z"
      clipRule="evenodd"
    />
  </svg>
);
export { Lock };
