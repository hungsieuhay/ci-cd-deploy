import { Fragment, PropsWithChildren } from "react";
import { NavBar } from "./nav-bar";

export const MainLayout = ({ children }: PropsWithChildren) => (
  <Fragment>
    <NavBar />
    <div className="pt-16 tb:pt-[6.75rem] dt:pt-[7.4375rem]">{children}</div>
  </Fragment>
);
