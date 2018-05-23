import Content from "./Content";
export default () => (
	<div className="outdoor">
		<div className="left_section">
			<Content />
		</div>
		<div className="right_section">test</div>
		<style jsx>{`
			:global(body) {
				margin: 0;
			}
			:global(*) {
				box-sizing: border-box;
			}
			.outdoor {
				background: #fff;
				display: block;
				transition: all 0.3s ease-in-out;
			}
			.left_section {
				width: 100%;
				transition: all 0.3s ease-in-out;
			}
			.right_section {
				background: pink;
				width: 100%;
				transition: all 0.3s ease-in-out;
			}
			@media (min-width: 56.25rem) and (min-height: 40rem) {
				.left_section {
					width: 45%;
				}
				.right_section {
					background: pink;
					width: 55%;
				}
				.outdoor {
					display: flex;
					flex-direction: row;
				}
			}
		`}</style>
	</div>
);
