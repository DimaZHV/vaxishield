import React from "react";
import "./ContactForm.css";
import OK from "./OK.png";
import OK1 from "./OK1.png";
import { useState } from "react";

function ContactForm() {
	const [acc, setAcc] = useState(true);

	function accept(e) {
		e.preventDefault();
		setAcc(!acc);
	}
	return (
		<>
			{acc ? (
				<div className="ContactForm">
					<h2>Need to book Vaccination at home?</h2>
					<h4>Contact us to know more</h4>

					<form action="">
						<input placeholder={"Name"} type="text" name="" id="" />
						<input placeholder={"Email"} type="email" name="" id="" />
						<input placeholder={"Phone number"} type="tel" name="" id="" />
						<input placeholder={"City"} type="text" name="" id="" />

						<button onClick={accept}>Done</button>
					</form>
				</div>
			) : (
				<div className="accept">
					<div style={{ marginTop: "114px" }}>
						<img src={OK} alt="" />
						<img className="white" src={OK1} alt="" />
					</div>
					<h1>Thank you!</h1>
					<h3>Your message has been sent successfully! </h3>
					<h5>We will get back to you as soon as possible.</h5>
				</div>
			)}
		</>
	);
}

export default ContactForm;
