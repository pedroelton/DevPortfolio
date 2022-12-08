import React from "react";
import ContactForm from "./ContactForm";
import ListTopics from "./ListTopics";

const Contact = () => {
	return (
		<section
			id="contact"
			className="flex justify-center align-middle lg:py-24 lg:w-[1400px] m-auto grid-cols-1 lg:grid-cols-2 lg:space-x-16 flex-wrap lg:flex-nowrap p-8 lg:p-0 space-y-12 lg:space-y-0">
			<div className="flex flex-col space-y-5 w-fit">
				<h2 className="text-4xl font-bold md:w-8/12">
					How about we schedule an interview?
				</h2>
				<p className=" md:w-8/12 leading-relaxed md:text-lg text-md font-light text-left">
					We can book a video call and talk about how I can add value
					to your team and see if we are a good match.
				</p>
				<ul className="flex flex-col w-fit">
					<ListTopics
						icon="email"
						topic="pedroelton@msn.com"
						link="mailto:pedroelton@msn.com"
					/>

					<ListTopics
						icon="phone"
						topic="+81 80 3948-7770"
					/>

					<ListTopics
						icon="linkedin"
						topic="/pedro-elton"
						link="https://www.linkedin.com/in/pedro-elton/"
					/>
				</ul>
			</div>
			<div className="flex flex-col space-y-5 lg:w-[30vw] w-full">
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
