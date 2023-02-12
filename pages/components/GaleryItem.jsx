/* eslint-disable @next/next/no-img-element */
import { Tooltip } from "flowbite-react";
import React from "react";

const GaleryItem = ({ photo, alt }) => {
	return (
		<>
			<Tooltip content={alt}>
				<img
					src={photo}
					alt={alt}
					className="w-full h-full scale-110"
					data-tooltip-target="tooltip-hover"
					data-tooltip-trigger="hover"
				/>
			</Tooltip>
		</>
	);
};

export default GaleryItem;
