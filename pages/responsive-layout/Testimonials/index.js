import { Component } from "react";
import Testimonial from "./Testimonial";
import TestimonialsAuthors from "./TestimonialsAuthors";

class Testimonials extends Component {
	render() {
		return (
			<div className="container">
				<div className="testimonial">
					<TestimonialsAuthors />
					<Testimonial />
				</div>
				<style jsx>{`
					.container {
						position: relative;
						background: brown;
						padding-bottom: 4rem;
						z-index: 10;
						position: relative;
					}
					.testimonial {
						width: auto;
						margin: 0 2rem;
						text-align: center;
					}
					@media (min-width: 48rem) {
						.container {
							padding: 5rem;
						}
						.testimonial {
							width: 80%;
							margin: 0 auto;
						}
					}
					@media (min-width: 75rem) {
						.container {
							padding: 5rem 5rem 8rem;
						}
						.testimonial {
							width: 60%;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Testimonials;
