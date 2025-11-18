import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

import Logo from '../../assets/favicon.png';

const Nav = () => {
  const [open, setOpen] = useState(true);

  function sideMenu() {
    open === true ? setOpen(false) : setOpen(true);
  }

  return (
    <>
      <div className="logo-info">
        <div className="logo w-full flex items-center justify-between">
          <div className="logoName flex items-center gap-2">
            <img src={Logo} alt="logo-img" className="w-8 md:w-10 lg:w-12" />
            <h5 className="capitalize text-lg md:text-2xl lg:text-4xl">
              magic <span className="font-bold">studio</span>
            </h5>
          </div>
          <div className="mobile-menus md:hidden">
            {open && (
              <i
                onClick={sideMenu}
                className="ri-menu-line text-lg cursor-pointer"
              ></i>
            )}

            <div
              className={`menu-open bg-red-400 absolute right-0 top-0 w-1/2 h-4/5 flex flex-col justify-center items-end p-4 transition-all duration-300 ease-in-out z-10
              ${
                open
                  ? 'opacity-0 pointer-events-none'
                  : 'opacity-100 pointer-events-auto'
              }`}
              >
              <i
                onClick={sideMenu}
                className="ri-close-line text-3xl cursor-pointer absolute top-4 right-4"
              ></i>
              <ul className="menus w-full flex flex-col gap-8 mb-20 text-white text-3xl text-center">
                <li>Academy</li>
                <li>Tools</li>
                <li>API</li>
              </ul>
            </div>
          </div>

          <ul className="menus hidden md:flex md:items-center md:gap-2.5 md:text-gray-400 md:text-xl lg:gap-8">
            <li>Academy</li>
            <li>Tools</li>
            <li>API</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
