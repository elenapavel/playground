import { module } from "../application";
import { PureComponent } from "react";
import { Trail, animated, config } from "react-spring";
import MenuItem from "./MenuItem";

class Menu extends PureComponent {
	render() {
		return module("menu", ({ menu }) => {
			const { isOpen, items, selectedIndex } = menu;
			const menuItemIn = {
				opacity: 1,
				x: 0,
			};
			const menuItemOut = {
				opacity: 0,
				x: 20,
			};
			return (
				<div className="container">
					<Trail
						keys={items.map((item, key) => key)}
						config={config.stiff}
						from={isOpen ? menuItemIn : menuItemOut}
						to={isOpen ? menuItemIn : menuItemOut}
					>
						{items.map((item, key) => styles => (
							<animated.div
								key={key}
								style={{
									transform: `translateX(${styles.x}vw)`,
									opacity: styles.opacity,
								}}
							>
								<MenuItem
									isSelected={key == selectedIndex}
									name={item.scientificName}
									index={key}
								/>
							</animated.div>
						))}
					</Trail>
					<style jsx>{`
						.container {
							position: absolute;
							top: 0;
							bottom: 0;
							right: 0;
							padding: 4rem 1rem;
							width: 20rem;
							transform: ${isOpen
								? "translateX(0)"
								: "translateX(20rem)"};
							overflow: hidden;
							transition: transform 0.5s ease-in-out;
							height: 100%;
							background: #fff;
						}
						@media (min-width: 80rem) {
							padding: 8rem 1rem;
						}
					`}</style>
				</div>
			);
		});
	}
}

export default Menu;
