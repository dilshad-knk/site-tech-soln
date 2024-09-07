import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold p-2"><span className='color-brand'>Techish</span> Solutions</h1>


        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >

          {isOpen?  <IoClose className='size-7 '/> : <GiHamburgerMenu className='size-7' />}
         


        </button>
      </div>


      <ul className="hidden md:flex space-x-6">
        <li><a href="#services" className=" hover:bg-brand p-2  ">Services</a></li>
        <li><a href="#portfolio" className=" hover:bg-brand p-2 ">Portfolio</a></li>
        <li><a href="#testimonials" className=" hover:bg-brand p-2 ">Testimonials</a></li>
        <li><a href="#contact" className=" hover:bg-brand p-2 ">Contact</a></li>
      </ul>
    </div>

    
      {
    isOpen && (
      <div className="md:hidden mt-4">
        <ul className="space-y-4">
          <li><a href="#services" className="block hover:bg-brand w-32 p-2">Services</a></li>
          <li><a href="#portfolio" className="block hover:bg-brand w-32 p-2">Portfolio</a></li>
          <li><a href="#testimonials" className="block hover:bg-brand w-32 p-2">Testimonials</a></li>
          <li><a href="#contact" className="block hover:bg-brand w-32 p-2">Contact</a></li>
        </ul>
      </div>
    )
  }
    </nav >
  );
}

export default Navbar;
