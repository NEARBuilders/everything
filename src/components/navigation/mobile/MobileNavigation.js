import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useScrollBlock from ".././../../hooks/useScrollBlock";
import { Menu } from "./Menu";
import { Navigation } from "./Navigation";

export function MobileNavigation(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  
  return (
    <>
      <div
        onClick={() => {
          setShowMenu(true);
          blockScroll();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="24px"
          height="24px"
        >
          <circle cx="12" cy="12" r="8" />
        </svg>
      </div>
      <Menu
        {...props}
        showMenu={showMenu}
        onCloseMenu={() => {
          setShowMenu(false);
          allowScroll();
        }}
      />
    </>
  );
}
