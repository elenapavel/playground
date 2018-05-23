export default ({ title, description }) => (
	<div className="details">
		<div className="title">{title}</div>
		<div className="description">{description}</div>
		<style jsx>{`
			.details {
				display: block;
				color: #000;
			}
			.title {
				font-size: 5rem;
				font-weight: bold;
				line-height: 1.4;
				margin-bottom: 1rem;
			}
			.description {
				font-size: 1.2rem;
				font-weight: 300;
				line-height: 1.2;
			}
		`}</style>
	</div>
);
