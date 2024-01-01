import { useState, useRef, useEffect } from "react";
import { useReactiveVar } from "@apollo/client";
import { navbarHeightVar } from "../../graphql/state";
import BottomNav from "./BottomNav";
import MobileNav from "./MobileNav";
import TopNav from "./TopNav";

const Navbar = () => {
  const [navHeight, setNavHeight] = useState(0);
  const navbarRef = useRef(null);
  const navbarHeight = useReactiveVar(navbarHeightVar);

  useEffect(() => {
    if (navbarRef.current) {
      // Access the clientHeight property to get the height
      const height = navbarRef.current.clientHeight;
      setNavHeight(height);
      navbarHeightVar({
        ...navbarHeight,
        height,
      });
    }
  }, []);

  return (
    <nav ref={navbarRef}>
      <TopNav />
      <BottomNav />
      <MobileNav />
    </nav>
  );
};

export default Navbar;
