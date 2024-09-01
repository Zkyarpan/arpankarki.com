"use client";

import React, { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";

const SketchyUnderline = ({ width, height, color }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rc = rough.canvas(canvas);

    rc.line(0, height / 2, width, height / 2, {
      stroke: color,
      strokeWidth: 2,
      roughness: 2.8,
    });
  }, [width, height, color]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default SketchyUnderline;
