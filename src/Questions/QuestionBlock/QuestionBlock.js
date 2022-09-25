import React from "react";
import "../Questions.css";
import plus from "../Plus.png";
import minus from "../Minus.png";
import { useState } from "react";

function QuestionBlock(props) {
	const [tr, setTr] = useState(true);

	return (
		<div className="q-block" style={{ marginBottom: "10px" }}>
			<div className="show">
				<div className="block-p">
					<p>{props.name}</p>
					<img
						style={
							tr ? { height: "15px" } : { height: "5px", paddingTop: "3px" }
						}
						onClick={() => setTr(!tr)}
						src={tr ? plus : minus}
						alt=""
					/>
				</div>
			</div>
			{tr ? (
				false
			) : (
				<div className="closed">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
						similique excepturi incidunt labore, expedita quas enim deleniti
						quos alias architecto mollitia reprehenderit, impedit in,
						repellendus ipsam saepe nostrum recusandae voluptatem?
					</p>
				</div>
			)}
		</div>
	);
}

export default QuestionBlock;
