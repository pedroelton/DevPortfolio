import React from "react";
import NavMenu from "./NavMenu";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Footer = () => {
	return (
		<footer className="w-full p-16 bg-slate-900 justify-center items-center text-white flex flex-col space-y-8">
			<NavMenu />
			<p className="text-sm text-center">
				©Copyright 2022 - pedroelton.com - All rights reserved
			</p>
			<div className="flex rounded-full bg-indigo-500 h-20 w-20 justify-center items-center text-white shadow-lg shadow-indigo-500 fixed bottom-4 right-4 hover:scale-90 transition-all duration-300">
				<a href="#navbar">
					<ExpandLessIcon className="text-6xl text-center scale-150" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
