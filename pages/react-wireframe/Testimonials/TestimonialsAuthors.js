import { Component } from "react";

import $ from "./style.css";

class TestimonialsAuthors extends Component {
	render() {
		const testimonialAuthorActiveClasses = `${$.testimonial_author} ${
			$.testimonial_author_active
		}`;
		const testimonialAuthorAvatarActiveClasses = `${
			$.testimonial_author_avatar
		} ${$.testimonial_author_avatar_active}`;
		const testimonialAuthorNameActiveClasses = `${$.testimonial_author_name} ${
			$.testimonial_author_name_active
		}`;

		return (
			<div className={$.testimonial_authors_container}>
				<div className={$.testimonial_author}>
					<div className={$.testimonial_author_avatar} />
					<div className={$.testimonial_author_name} />
				</div>
				<div className={$.testimonial_author}>
					<div className={$.testimonial_author_avatar} />
					<div className={$.testimonial_author_name} />
				</div>
				<div className={testimonialAuthorActiveClasses}>
					<div className={testimonialAuthorAvatarActiveClasses} />
					<div className={testimonialAuthorNameActiveClasses} />
				</div>
				<div className={$.testimonial_author}>
					<div className={$.testimonial_author_avatar} />
					<div className={$.testimonial_author_name} />
				</div>
				<div className={$.testimonial_author}>
					<div className={$.testimonial_author_avatar} />
					<div className={$.testimonial_author_name} />
				</div>
			</div>
		);
	}
}

export default TestimonialsAuthors;
