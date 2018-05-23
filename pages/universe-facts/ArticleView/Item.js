import $ from "./style.css";
import { Spring } from "react-spring";
import { TimingAnimation, Easing } from "react-spring/dist/addons.cjs";

const Item = ({ backgroundImage, index }) => {
	const itemsIn = {
		opacity: 0,
		x: 20,
	};
	const itemsOut = {
		opacity: 1,
		x: 0,
	};
	return (
		<Spring
			impl={TimingAnimation}
			config={{
				delay: 200 + 100 * index,
				duration: 300,
				easing: Easing.linear,
			}}
			from={itemsIn}
			to={itemsOut}
			reset
		>
			{styles => (
				<div
					className={$.gallery_item}
					style={{
						backgroundImage: `url(${backgroundImage})`,
						opacity: styles.opacity,
						transform: `translateX(${styles.x}rem)`,
					}}
				/>
			)}
		</Spring>
	);
};

export default Item;
