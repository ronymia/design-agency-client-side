import React from 'react';

import logo from "../../../assets/logos/logo.png";

function Header() {
     return (
          <header className='w-full px-4 py-5'>
               <nav className=' flex items-center justify-between'>
                    <div className="">
                         <img src={logo}
                              className="w-[140px] h-[40px]"
                              alt="header-logo" />
                    </div>

                    <div className="">
                         menu
                    </div>
               </nav>
          </header>
     )
}

export default Header;
