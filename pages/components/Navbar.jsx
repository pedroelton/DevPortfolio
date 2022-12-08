import React from "react";
import NavMenu from "./NavMenu";
import Brightness6Icon from "@mui/icons-material/Brightness6";

const Navbar = ({toggle}) => {
	return (
		<nav
			id="navbar"
			className="flex flex-grow w-full p-8 m-auto justify-center">
			<div className="flex flex-col md:flex-row lg:w-[1400px] justify-between w-full">
				<a
					href="https://pedroelton.vercel.app/"
					className="flex justify-center">
					<p
						className="bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 text-transparent text-2xl font-bold cursor-pointer self-center md:self-start pb-8 md:pb-0"
						alt="logo">
						&lt;PedroElton /&gt;
					</p>
				</a>
				{/* <h3 className="font-extrabold  items-center scale-150 w-100 text-center md:text-left mb-4 md:mb-0">PdrEltn</h3> */}
				<div className="flex justify-center">
					<NavMenu />
					<Brightness6Icon
						onClick={toggle}
						className="mt-[2px] ml-4 hover:text-indigo-400 fixed top-8 right-4"
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
