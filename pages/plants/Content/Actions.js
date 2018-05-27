import { module } from "../application";

export default () =>
	module("plantoid", ({ plantoid, selectPlantByIndex }) => {
		const { selectedPlantIndex, isMenuOpened } = plantoid;
		return (
			<div className="actions">
				<div
					className="action ion-ios-arrow-back"
					onClick={() =>
						!isMenuOpened &&
						selectPlantByIndex(selectedPlantIndex - 1)
					}
				/>
				<div
					className="action ion-ios-arrow-forward"
					onClick={() =>
						!isMenuOpened &&
						selectPlantByIndex(selectedPlantIndex + 1)
					}
				/>
				<style jsx>{`
					.actions {
						position: relative;
						display: flex;
						z-index: 10;
					}
					.action {
						background: #d8d8d8;
						border-radius: 50%;
						width: 2.5rem;
						height: 2.5rem;
						margin-right: 1rem;
						font-size: 1.5rem;
						color: #fff;
						display: flex;
						align-items: center;
						justify-content: center;
						cursor: pointer;
						user-select: none;
					}
				`}</style>
			</div>
		);
	});
