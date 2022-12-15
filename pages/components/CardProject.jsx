/* eslint-disable @next/next/no-img-element */
import React from "react";

const CardProject = ({image, title, description, link, repo}) => {
	return (
		<div>
			<a href={link}>
				<div className="flex justify-center m-4 hover:scale-90 transition-all duration-300">
					<div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-[rgba(255,255,255,0.1)] shadow-lg">
						<img
							className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
							src={image}
							alt="Projeto frontend"
						
						/>
						<div className="p-6 flex flex-col justify-start">
							<h5 className="text-xl font-medium mb-2">
								{title}
							</h5>
							<p className="text-base mb-4">{description}</p>
							<a href={repo}>
								<p className="text-xs">
									Click here to access the repository
								</p>
							</a>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
};

export default CardProject;
