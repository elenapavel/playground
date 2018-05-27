import { PureComponent } from "react";
import Logo from "./Logo";
import Content from "./Content";
import SocialMedia from "./SocialMedia";
import { module } from "./application";

class Plantoid extends PureComponent {
	render() {
		return module("plantoid", ({ plantoid }) => {
			const {
				logo,
				section,
				plants,
				lastSelectedPlantIndex,
				selectedPlantIndex,
				socialMedia,
			} = plantoid;

			const lastSelectedPlant =
				lastSelectedPlantIndex != null
					? lastSelectedPlant
					: {
							scientificName: "",
							commonName: "",
							content: "",
							category: "",
							species: "",
							image: "",
					  };

			const selectedPlant = plants[selectedPlantIndex];

			return (
				<div className="application">
					<div className="to_top">
						<Logo logo={logo} />
					</div>
					<div className="to_center">
						<Content
							title={selectedPlant.scientificName}
							name={selectedPlant.commonName}
							content={selectedPlant.content}
							category={selectedPlant.category}
							species={selectedPlant.species}
							image={selectedPlant.image}
							lastTitle={lastSelectedPlant.scientificName}
							lastName={lastSelectedPlant.commonName}
							lastContent={lastSelectedPlant.content}
							lastCategory={lastSelectedPlant.category}
							lastSpecies={lastSelectedPlant.species}
							lastImage={lastSelectedPlant.image}
							label={section.label}
							lastIndex={plants.indexOf(selectedPlant)}
							currentIndex={selectedPlantIndex}
							total={plants.length}
						/>
					</div>
					<div className="to_right">
						<SocialMedia items={socialMedia} />
					</div>
					<style jsx>{`
						.application {
							position: relative;
							display: block;
							flex-direction: row;
							flex-wrap: wrap;
							min-height: 32rem;
						}
						.to_center {
							flex-basis: calc(100% - 4rem);
						}
						.to_right {
							flex-basis: 4rem;
						}
						@media (min-width: 64rem) {
							.application {
								height: 100vh;
								display: flex;
								overflow-y: hidden;
							}
						}
						@media (min-width: 90rem) and (min-height: 56.25rem) {
							.to_center {
								flex-basis: calc(100% - 8rem);
							}
							.to_right {
								flex-basis: 8rem;
							}
						}
					`}</style>
				</div>
			);
		});
	}
}

export default Plantoid;
