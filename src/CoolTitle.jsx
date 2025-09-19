import React from "react";

export function CoolTitle({
  text,
  duration = 700, // ms
  delay = 0,       // ms
  as: Tag = "span"
}) {
  const styleTag = `

  `;

  return (
    <>
      <style>{styleTag}</style>
      <Tag
        className="bounce-fade"
        style={{
          "--duration": `${duration}ms`,
          "--delay": `${delay}ms`,
        }}
      >
        {text}
      </Tag>
    </>
  );
}
