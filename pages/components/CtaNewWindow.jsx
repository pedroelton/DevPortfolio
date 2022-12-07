import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const CtaNewWindow = ({text, link}) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer">
			<button className="bg-slate-900 text-white text-center py-4 px-12 md:px-10 md:h-[62px] rounded-2xl hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500 flex flex-nowrap pt-5">
				{text}
				<OpenInNewIcon className="text-white flex ml-2" />
			</button>
		</a>
	);
};

export default CtaNewWindow;
