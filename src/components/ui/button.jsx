import React from "react";

export function Button({ className = "", style, children, ...props }) {
  return (
    <button
      className={
        "inline-flex items-center justify-center rounded-xl font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
        className
      }
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}