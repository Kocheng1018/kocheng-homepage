import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed w-full p-2 backdrop-blur-10 bg-[#ffffff40]">
      <div className="h-10 max-w-3xl mx-auto flex justify-between items-center">
        <h1 className="">Kocheng Hsiao</h1>
        <a href="https://github.com/Kocheng1018" target="_blank" title="GitHub" rel="noreferrer">GitHub</a>
      </div>
    </nav>
  )
};

export default NavBar;
