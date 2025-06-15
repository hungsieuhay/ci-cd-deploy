"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "../lib/utils";
import { Svg } from "../components/svg";
import { NavBarItem } from "../mock/mock-data";

interface HeaderAccordionProps {
  section: NavBarItem;
  isOpen?: boolean;
  onToggle?: () => void;
  //   index: number;
}

export const HeaderAccordion = ({
  isOpen = false,
  section,
  onToggle,
}: HeaderAccordionProps) => {
  const { label, child } = section;
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <li>
      <div
        className="py-[0.75rem] border-b border-neutral-200 flex items-center"
        onClick={onToggle}
      >
        <span className="text-base tb:text-xl font-bold">{label}</span>
        <Svg
          src="/icons/line/chevron-down.svg"
          className={cn(
            "ml-auto transform transition-all duration-500 ease-out",
            isOpen && "rotate-180"
          )}
        />
      </div>
      {child.map(({ icon, title, desc }, index) => (
        <div
          style={{ height }}
          className="transition-all duration-400 ease-out overflow-hidden"
          key={index}
        >
          <div ref={contentRef}>
            <div className={cn("flex gap-4 p-4")}>
              <Button
                variant="tertiary"
                className={cn("rounded-lg", !icon && "opacity-0")}
                size="icon"
              >
                <Svg src={icon as string} className="text-2xl" />
              </Button>
              <div className="text-base">
                <p className="font-bold text-xl">{title}</p>
                {desc && <p className="text-neutral-500 text-md">{desc}</p>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </li>
  );
};
