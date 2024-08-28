import React from "react";

const TechIcons = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="w-10 h-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="w-0 h-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(110, 231, 183)" />
          <stop offset="100%" stopColor="rgb(56, 189, 248)" />
        </linearGradient>
      </svg>
    </>
  );
};

export default TechIcons;
