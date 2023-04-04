import BottomNav from "./BottomNav";
import MobileNav from "./MobileNav";
import TopNav from "./TopNav";

const Navbar = () => {
  return (
    <nav>
      <TopNav />
      <BottomNav />
      <MobileNav />
    </nav>
  );
};

export default Navbar;
