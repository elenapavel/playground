import { Component } from "react";

import Testimonial from "./Testimonial";
import TestimonialsAuthors from "./TestimonialsAuthors";

import $ from "./style.css";

class Testimonials extends Component {
	render() {
		return (
			<div className={$.container}>
				<div className={$.testimonial}>
					<TestimonialsAuthors />
					<Testimonial />
				</div>
			</div>
		);
	}
}

export default Testimonials;
