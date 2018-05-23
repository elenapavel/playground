import { Component } from "react";
import { Transition, animated, config } from "react-spring";

const defaultStyles = {
	fontSize: "3rem",
	fontWeight: "bold",
	position: "absolute",
	top: "3rem",
};

const titles = ["ComponentA", "ComponentB"];

export default class extends Component {
	state = { toggled: true };
	toggle = e => this.setState(state => ({ toggled: !state.toggled ? 1 : 0 }));
	render() {
		const { state } = this;

		return (
			<div className="container" onClick={() => this.toggle()}>
				<Transition
					keys={titles[state.toggled]}
					from={{ opacity: 1, transform: "translateY(100%)" }}
					enter={{ opacity: 1, transform: "translateY(0%)" }}
					leave={{
						opacity: 0,
						transform: "translateY(-100%)",
					}}
				>
					{styles => (
						<animated.div
							style={{
								...defaultStyles,
								...styles,
								backgroundColor: "red",
							}}
						>
							{titles[state.toggled]}
						</animated.div>
					)}
				</Transition>
				<style jsx>{`
					:global(body) {
						margin: 0;
					}
					* {
						box-sizing: border-box;
					}
					.container {
						position: relative;
						padding: 3rem;
					}
				`}</style>
			</div>
		);
	}
}
