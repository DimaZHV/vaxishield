import React from "react";
import "./Questions.css";
import QuestionBlock from "./QuestionBlock/QuestionBlock";

function Questions() {
	const questions = [
		"What is Vaccination At Home on Vaccishield?",
		"How much does it cost?",
		"Is it genuine?",
	];

	return (
		<div className="questions">
			<h4>Frequently Asked Questions</h4>
			<div className="questions-block">
				{questions.map((el) => (
					<QuestionBlock name={el} key={el} />
				))}
			</div>
		</div>
	);
}

export default Questions;
