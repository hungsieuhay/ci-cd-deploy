import { Fragment, PropsWithChildren } from "react";
import { NavBar } from "./nav-bar";

export const MainLayout = ({ children }: PropsWithChildren) => (
  <Fragment>
    <NavBar />
    {children}
  </Fragment>
);
