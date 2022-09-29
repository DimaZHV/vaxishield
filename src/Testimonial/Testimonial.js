import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";

function Testimonial() {
	const testim = [
		{
			name: "Monika Aggarwal",
			scr: pic1,
			desc: "I am a working professional and used to miss vaccination schedule of my elder daughters vaccination with my busy schedule. For my younger daughter, i subscribed for Vaxishield and home vaccination is very convenient and helps me to follow the vaccination schedule properly.",
		},
		{
			name: "Saumya Gupta",
			scr: pic2,
			desc: "Vaxishield helped me to follow the vaccination schedule properly and also save money. Their staff is well trained and supportive.",
		},
	];

	return (
		<div className="testim">
			<h4>Testimonial</h4>
			<div className="swiper">
				<Swiper
					slidesPerView={2}
					loop={true}
					centeredSlides={true}
					breakpoints={{
						250: {
							slidesPerView: 1,
						},
						376: {
							slidesPerView: 2,
						},
					}}
				>
					{testim.map((el) => (
						<SwiperSlide key={el.name}>
							<div className="slider">
								<div className="top">
									<img src={el.scr} alt="" />
									<p>{el.name}</p>
								</div>
								<div className="bottom">
									<p>{el.desc}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
export default Testimonial;
