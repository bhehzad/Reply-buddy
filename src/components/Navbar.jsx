import React from 'react';
import '../index.css';

import { useState } from 'react';

const Navbar = () => {
  const [click, setClick] = useState(false)
  const ClickHandler = () => {
    if (!click) setClick(true)
    else setClick(false)
    console.log(click)
  }
  return (
    <>
      <div className="border-b-[1px] border-solid border-neutral50">
        <div className="container max-w-6xl mx-auto border-b-[1px] border-solid border-neutral50">
          <nav className="flex items-center justify-between flex-wrap bg-white p-4 border-solid border-neutral200">
            <div className="flex items-center flex-shrink-0 text-black mr-12">
              <span className=" text-xm font-semibold font-lato">Logo</span>
            </div>
            <div className="spacer:hidden " onClick={ClickHandler}>
              <img src="../images/menu.png" alt="menu" />
            </div>

            <div className={click ? "w-full block flex-grow spacer:flex spacer:items-center spacer:w-auto" : ' hidden  spacer:flex spacer:w-[90%] spacer:items-center spacer:justify-center'}>

              <div className="text-sm sm:flex-grow spacer:mr-auto spacer:ml-8">
                <a
                  href="#"
                  className="block mt-4 spacer:inline-block spacer:mt-0 active:text-black text-black text-[14px] font-semibold mr-8 font-lato"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block mt-4 spacer:inline-block spacer:mt-0 active:text-black text-neutral text-[14px] font-normal mr-8 font-lato"
                >
                  How it works
                </a>
                <a
                  href="#"
                  className="block mt-4 spacer:inline-block spacer:mt-0 active:text-black text-neutral mr-8 text-[14px] font-normal font-lato"
                >
                  Reviews
                </a>

                <a
                  href="#"
                  className="block mt-4 spacer:inline-block spacer:mt-0 active:text-black text-neutral text-[14px] font-normal font-lato"
                >
                  Stay Updated
                </a>
              </div>
              <div className='rounded'>
                <a
                  href="#"
                  className="leading-none rounded text-white bg-primary flex w-[6rem] h-[2.06rem] items-center justify-center  mt-4 md:mt-0 font-lato font-medium"
                ><span className='text-[0.875rem] leading-none'>Donwload</span></a
                >
              </div>
            </div>


          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;