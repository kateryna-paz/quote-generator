import React from "react";

type LogoProps = {
  width: number;
  height: number;
  color?: string;
};

const Logo = ({ width, height, color = "#4F46E5" }: LogoProps) => {
  const gradientId = `grad-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className="shadow-inner shadow-cyan-100/80 rounded-2xl "
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#4ecdc4" stopOpacity="1" />
        </linearGradient>
      </defs>

      <circle
        cx={width / 2}
        cy={height / 2}
        r={Math.min(width, height) * 0.45}
        fill={`url(#${gradientId})`}
      />

      <path
        d={`M${width * 0.3} ${height / 2} 
           A${width * 0.2} ${height * 0.2} 0 1 1 ${width / 2} ${height * 0.7} 
           L${width / 2} ${height * 0.9} 
           L${width * 0.7} ${height * 0.7} 
           L${width / 2} ${height * 0.7} 
           A${width * 0.2} ${height * 0.2} 0 1 1 ${width * 0.7} ${height / 2} 
           L${width * 0.7} ${height * 0.3} Z`}
        fill="white"
        stroke="white"
        strokeWidth={2}
      />

      <circle
        cx={width / 2}
        cy={height / 2}
        r={Math.min(width, height) * 0.125}
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};

export default Logo;
