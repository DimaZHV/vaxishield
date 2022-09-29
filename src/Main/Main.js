import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./Main.css";
import Genuine from "./Genuine.png";

function Main() {
	return (
		<div className="main-header">
			<div className="main-description">
				<h1>Vaxishield</h1>
				<h2>
					Keep your Child safe by getting them vaccinated from the comfort of
					your home
				</h2>
				<p>Register Now and</p>
				<p>
					avail<span>20% discount</span>
				</p>
				<p>on the vaccination package</p>
				<div className="style">
					<img src={Genuine} alt="" />
					<p className="imageText">
						25000+ vaccinations administered in 3 cities
					</p>
				</div>
			</div>

			<div className="main-form"></div>
			<ContactForm />
		</div>
	);
}

export default Main;
