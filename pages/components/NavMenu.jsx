import React from "react";

const NavMenu = () => {
	return (
		<ul className="flex space-x-8 items-center w-fit justify-center">
			<a href="https://drive.google.com/file/d/1rG3FC86osIgaF2T7OERpiPElY_tEHGRO/view?usp=sharing">
				<li className="hover:font-bold hover:scale-110 hover:text-indigo-600 transition-all duration-300 hover:underline hover:underline-offset-4 cursor-pointer">
					Curriculum
				</li>
			</a>
			<a href="#skills">
				<li className="hover:font-bold hover:scale-110 hover:text-indigo-600 transition-all duration-300 hover:underline hover:underline-offset-4 cursor-pointer">
					Skills
				</li>
			</a>
			<a href="#portfolio">
				<li className="hover:font-bold hover:scale-110 hover:text-indigo-600 transition-all duration-300 hover:underline hover:underline-offset-4 cursor-pointer">
					Portfolio
				</li>
			</a>
			<a href="#contact">
				<li className="hover:font-bold hover:scale-110 hover:text-indigo-600 transition-all duration-300 hover:underline hover:underline-offset-4 cursor-pointer">
					Contact
				</li>
			</a>
		</ul>
	);
};

export default NavMenu;
