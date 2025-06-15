"use client";

import { Fragment, useEffect, useState } from "react";
import { navigationData } from "../mock/mock-data";
import { HeaderAccordion } from "./header-accordion";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "../lib/utils";

interface MobileMenuContentProps {
  isOpen: boolean;
}

export const MobileMenuContent = ({ isOpen }: MobileMenuContentProps) => {
  const [openSections, setOpenSections] = useState<Set<number>>(new Set());
  const newOpenSections = new Set(openSections);

  useEffect(() => {
    if (!isOpen) {
      newOpenSections.clear();
      setOpenSections(newOpenSections);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const toggleSection = (sectionId: number): void => {
    if (newOpenSections.has(sectionId)) {
      newOpenSections.delete(sectionId);
    } else {
      newOpenSections.clear();
      newOpenSections.add(sectionId);
    }
    setOpenSections(newOpenSections);
  };

  return (
    <Fragment>
      {isOpen && (
        <div className="fixed inset-0 z-10 top-[calc(4rem+1px)] tb:top-[calc(6.75rem+1px)] dt:hidden overflow-auto">
          <div className="min-h-full p-4 bg-neutral-0">
            <ul>
              {navigationData.map((item) => (
                <HeaderAccordion
                  key={item.id}
                  section={item}
                  onToggle={() => toggleSection(item.id)}
                  isOpen={openSections.has(item.id)}
                />
              ))}
            </ul>
            <ul className="py-2 grid grid-cols-3 tb:hidden block">
              {["Về iTel", "Tin tức", "Tuyển dụng"].map((item) => (
                <Link href="#" key={item} className="py-4">
                  {item}
                </Link>
              ))}
            </ul>
            <div className="tb:hidden block">
              <Button className="w-full">Đăng nhập</Button>
            </div>
            <ul className="py-4 flex justify-center items-center flex-wrap">
              {[
                "Điều khoản bảo mật",
                "Điều khoản sử dụng",
                "Quyền riêng tư",
              ].map((item, index) => (
                <div key={item} className="flex items-center mr-4">
                  <div
                    className={cn(
                      "w-1 h-1 rounded-full bg-neutral-600",
                      index === 0 && "hidden",
                      index === 2 && "hidden tb:block"
                    )}
                  />
                  <Link href="#" className="py-2 text-md text-neutral-600 ml-4">
                    {item}
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Fragment>
  );
};
