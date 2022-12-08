import React from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_s4rkg7c",
				"template_xz5bezg",
				e.target,
				"0WdidzAPt9WOvuTQu"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}

	return (
		<div className="flex flex-col p-6 rounded-xl bg-[rgba(255,255,255,0.1)]">
			<form onSubmit={sendEmail}>
				<div className="form-group mb-6">
					<label htmlFor="name">
						Name: <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						name="name"
						className="form-control block
          w-full
          px-3
          py-4
          text-base
          font-normal
          text-zinc-700
          bg-white bg-clip-padding
          border border-solid border-orange-200
          rounded-lg
          transition
          ease-in-out
          m-0
          mt-2
          focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
						id="exampleInput7"
						placeholder="Your name here"
						required
					/>
				</div>
				<div className="form-group mb-6">
					<label htmlFor="email">
						E-mail: <span className="text-red-500">*</span>
					</label>
					<input
						type="email"
						name="email"
						className="form-control block
          w-full
          px-3
          py-4
          text-base
          font-normal
          text-zinc-700
          bg-white bg-clip-padding
          border border-solid border-orange-200
          rounded-lg
          transition
          ease-in-out
          m-0
          mt-2
          focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
						id="exampleInput8"
						placeholder="Your Email address here"
						required
					/>
				</div>
				<div className="form-group mb-6">
					<label htmlFor="message">
						Message: <span className="text-red-500">*</span>
					</label>
					<textarea
						className="
        form-control
        block
        w-full
        px-3
        py-4
        text-base
        font-normal
        text-zinc-700
        bg-white bg-clip-padding
        border border-solid border-orange-200
        rounded-lg
        transition
        ease-in-out
        m-0
        mt-2
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
        "
						id="exampleFormControlTextarea13"
						rows="3"
						placeholder="Type your message..."
						name="message"
						required></textarea>
				</div>
				<button
					type="submit"
					className="
        w-full
        px-6
        py-4
        bg-indigo-500
        text-white
        font-medium
        text-md
        leading-tight
        uppercase
        rounded-2xl
        shadow-lg
        hover:bg-indigo-600 hover:shadow-indigo-600 hover:shadow-lg
        focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-indigo-800 active:shadow-lg
        transition
        duration-150
        ease-in-out">
					Send my message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
