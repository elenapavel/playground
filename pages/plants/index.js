import Head from "next/head";
import Application, { module } from "./application";
import Plantoid from "./Plantoid";
import Menu from "./Menu";
import $ from "./style.css";

export default () => (
	<div className={$.application}>
		<Head>
			<link
				rel="stylesheet"
				href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Lato:400,900"
				rel="stylesheet"
			/>
		</Head>
		<Application>
			{module(
				"plantoid",
				({ plantoid, toggleMenu, selectPlantByIndex }) => {
					const {
						isMenuOpened,
						plants,
						selectedPlantIndex,
					} = plantoid;
					const styleIn = {
						opacity: 0.5,
						transform: "translateX(-16rem)",
					};
					const styleOut = {
						opacity: 1,
						transform: "translateX(0%)",
					};
					const menuClasses = `${$.menu} ion-navicon`;
					return (
						<div>
							<div
								className={$.content}
								style={isMenuOpened ? styleIn : styleOut}
							>
								<Plantoid />
							</div>
							<div
								className={menuClasses}
								onClick={() => toggleMenu()}
							/>
							<Menu
								isOpen={isMenuOpened}
								items={plants}
								selectedIndex={selectedPlantIndex}
								onSelect={index => selectPlantByIndex(index)}
							/>
						</div>
					);
				}
			)}
		</Application>
	</div>
);
