import { PureComponent } from "react";
import Head from "./Head";
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
				lastSelectedPlant,
				selectedPlant,
				selectedPlantIndex,
				socialMedia,
			} = plantoid;

			const lastPlant = lastSelectedPlant
				? lastSelectedPlant
				: {
						scientificName: "",
						commonName: "",
						content: "",
						category: "",
						species: "",
						image: "",
				  };

			return (
				<div className="application">
					<Head />
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
							lastTitle={lastPlant.scientificName}
							lastName={lastPlant.commonName}
							lastContent={lastPlant.content}
							lastCategory={lastPlant.category}
							lastSpecies={lastPlant.species}
							lastImage={lastPlant.image}
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
							}
						}
						@media (min-width: 80rem) {
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
