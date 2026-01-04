import React from "react";

export function CoolTitle({
  text,
  duration = 700, // ms
  delay = 0,       // ms
  as: As = "span"
}) {
  return React.createElement(
    As,
    {
      className: "bounce-fade",
      style: {
        "--duration": `${duration}ms`,
        "--delay": `${delay}ms`,
      }
    },
    text
  );
}
