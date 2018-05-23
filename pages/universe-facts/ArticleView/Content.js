import { Spring } from "react-spring";
import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";
import $ from "./style.css";

const Content = ({ content }) => (
	<div>
		{content.map((field, key) => {
			const fieldsIn = {
				opacity: 0,
				x: 10,
			};
			const fieldsOut = {
				opacity: 1,
				x: 0,
			};
			return (
				<Spring
					key={key}
					impl={TimingAnimation}
					config={{
						duration: 300,
						easing: Easing.linear,
						delay: 100 + 100 * key,
					}}
					from={fieldsIn}
					to={fieldsOut}
					reset
				>
					{styles => (
						<div
							className={$.content_field}
							style={{
								opacity: styles.opacity,
								transform: `translateX(${styles.x}rem)`,
							}}
						>
							<div className={$.content_title}>{field.title}</div>

							<div>
								{field.paragraphs != null &&
								field.paragraphs.length
									? field.paragraphs.map(
											(paragraph, index) => (
												<div
													key={index}
													className={
														$.content_paragraph
													}
												>
													{paragraph}
												</div>
											)
									  )
									: null}
							</div>
						</div>
					)}
				</Spring>
			);
		})}
	</div>
);

export default Content;
