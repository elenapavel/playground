import Plantoid from "./Plantoid";
import Application, { module } from "./application";
import Menu from "./Menu";

export default () => (
	<Application>
		{module("menu", ({ menu, toggleMenu }) => {
			const { isOpen, items, selectedIndex } = menu;
			const styleIn = {
				opacity: 0.5,
				transform: "translateX(-16rem)",
			};
			const styleOut = {
				opacity: 1,
				transform: "translateX(0%)",
			};
			return (
				<div className="container">
					<div
						className="content"
						style={isOpen ? styleIn : styleOut}
					>
						<Plantoid />
					</div>
					<div
						className="menu ion-navicon"
						onClick={() => toggleMenu()}
					/>
					<Menu />
					<style jsx>{`
						:global(body) {
							margin: 0;
							overflow-x: hidden;
						}
						:global(*) {
							box-sizing: border-box;
						}
						.container {
							position: relative;
							font-family: "Lato", sans-serif;
							line-height: 1.4;
						}
						.content {
							transition: all 0.5s ease-in-out;
						}
						.menu {
							position: absolute;
							right: 0.8rem;
							width: 4rem;
							top: 0.5rem;
							z-index: 10;
							display: flex;
							align-items: center;
							justify-content: center;
							font-size: 3rem;
							line-height: 1;
							cursor: pointer;
						}
						@media (min-width: 30rem) {
							.menu {
								right: 2.5rem;
							}
						}
						@media (min-width: 64rem) {
							:global(body) {
								overflow-y: hidden;
							}
						}
						@media (min-width: 80rem) {
							.menu {
								right: 0;
								width: 8rem;
								top: 3rem;
							}
						}
					`}</style>
				</div>
			);
		})}
	</Application>
);
