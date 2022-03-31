import React from 'react'
import NavMenu from './NavMenu'

const Navbar = () => {
  return (
    <nav id="navbar" className="flex flex-grow w-full p-8 m-auto justify-center">
      <div className="flex flex-col md:flex-row lg:w-[1400px] justify-between w-full">
        <a href="https://pedroelton.com" className="flex justify-center">
          <img src="https://pedroelton.com/wp-content/uploads/2022/03/logo.svg" alt="logo" className="w-40 cursor-pointer self-center md:self-start pb-8 md:pb-0"/>
        </a>
      {/* <h3 className="font-extrabold  items-center scale-150 w-100 text-center md:text-left mb-4 md:mb-0">PdrEltn</h3> */}
     <div className="flex justify-center">
     <NavMenu/>
     </div>
      </div>
    </nav>
  )
}

export default Navbar