export default () => (
	<div className="navigation">
		<div className="link logo">logo</div>
		<div className="link menu">menu</div>
		<style jsx>{`
			.navigation {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.link {
				cursor: pointer;
				font-weight: bold;
				transition: all 0.3s ease-in-out;
			}
			.link:hover {
				color: grey;
			}
		`}</style>
	</div>
);
