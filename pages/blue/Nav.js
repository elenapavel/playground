export default ({ logo }) => (
	<div className="navigation">
		<img src={logo} />
		<style jsx>{`
			.navigation {
				position: relative;
				display: block;
			}
			img {
				max-width: 100px;
				height: auto;
			}
		`}</style>
	</div>
);
