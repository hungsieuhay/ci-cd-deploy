import { MainNav } from "./main-nav";
import { SubNav } from "./sub-nav";

export const NavBar = () => {
  return (
    <header className="bg-neutral-0 fixed right-0 left-0 z-50">
      <SubNav />
      <MainNav />
    </header>
  );
};
