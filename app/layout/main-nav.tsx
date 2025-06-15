"use client";

import Link from "next/link";
import { Svg } from "../components/svg";
import { Button } from "../ui/button";
import { useState } from "react";
import { MobileMenuContent } from "./mobile-menu-content";

export const MainNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-neutral-200">
      <div className="flex items-center justify-between container gap-10 py-3">
        <Svg src="/icons/logo.svg" />
        <ul className="dt:flex hidden flex-1 items-center gap-10">
          {[
            "Dịch vụ di động",
            "Ưu đãi iWow",
            "Mua sắm",
            "Giải trí",
            "Dịch vụ",
            "Hỗ trợ",
            "Hướng dẫn",
          ].map((item) => (
            <Link
              href="#"
              key={item}
              className="text-md text-neutral-800 font-bold hover:text-primary-500"
            >
              {item}
            </Link>
          ))}
        </ul>
        <div className="flex gap-4">
          <Button variant="tertiary" size="icon">
            <Svg src="/icons/bold/search.svg" />
          </Button>
          <div className="dt:block hidden">
            <Button variant="tertiary" size="icon">
              <Svg src="/icons/bold/follow-up.svg" />
            </Button>
          </div>
          <Button variant="tertiary" size="icon">
            <Svg src="/icons/bold/cart.svg" />
          </Button>
          <div className="hidden tb:block">
            <Button>Đăng nhập</Button>
          </div>
          <div className="dt:hidden block">
            <Button
              variant="tertiary"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Svg
                src={isOpen ? "/icons/line/Close.svg" : "/icons/bold/menu.svg"}
              />
            </Button>
          </div>
          <MobileMenuContent isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
};
