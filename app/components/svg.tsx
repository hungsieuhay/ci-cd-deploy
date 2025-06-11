"use client";

import React, { useState, useEffect } from "react";

interface SvgProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  className?: string;
}

export const Svg = ({ src, className = "", ...props }: SvgProps) => {
  const [svgContent, setSvgContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSvg = async () => {
      try {
        setLoading(true);
        setError(null);

        if (src.startsWith("data:image/svg+xml")) {
          // Handle data URLs
          const svgData = src.split(",")[1];
          const decodedSvg = atob(svgData);
          setSvgContent(decodedSvg);
        } else {
          // Handle file paths or URLs
          const response = await fetch(src);
          if (!response.ok) {
            throw new Error(`Failed to load SVG: ${response.status}`);
          }
          const svgText = await response.text();
          setSvgContent(svgText);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    if (src) {
      loadSvg();
    }
  }, [src]);

  if (loading) {
    return (
      <div
        className={`inline-block animate-pulse bg-gray-200 ${className}`}
        {...props}
      >
        <div className="w-6 h-6"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`inline-flex items-center justify-center text-red-500 ${className}`}
        {...props}
      >
        <span className="text-xs">SVG Error</span>
      </div>
    );
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      {...props}
    />
  );
};
