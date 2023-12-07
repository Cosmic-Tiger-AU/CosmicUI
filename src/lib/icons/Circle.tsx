import * as React from "react";
import { SVGProps } from "react";

export const Circle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    viewBox="0 0 512 512"
    {...props}>
    <path d="M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0z" />
  </svg>
);
