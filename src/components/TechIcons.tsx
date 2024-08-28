import React from "react";

const TechIcons = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <div>
      <Component className="size-10" />
    </div>
  );
};

export default TechIcons;
