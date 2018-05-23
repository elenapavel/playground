export default () => (
	<div className="actions">
		<div className="action next">next</div>
		<div className="action prev">prev</div>
		<style jsx>{`
			.actions {
				position: relative;
			}
			.action {
				border-radius: 50%;
				border: 2px solid grey;
				color: grey;
				transition: all 0.3s ease-in-out;
				display: inline-block;
				padding: 0.75rem;
				vertical-align: middle;
				font-size: 1rem;
				margin-right: 5px;
				line-height: 1.4;
				font-weight: bold;
			}
			.action:hover {
				border-color: #000;
				color: #000;
				cursor: pointer;
			}
		`}</style>
	</div>
);
