import { MainNav } from "./main-nav";
import { SubNav } from "./sub-nav";

export const NavBar = () => {
  return (
    <header className="bg-neutral-0 sticky inset-0 z-50">
      <SubNav />
      <MainNav />
    </header>
  );
};
