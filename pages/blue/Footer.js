import SocialMedia from "./SocialMedia";

export default ({ social_media, copyright }) => (
	<div className="footer">
		<div className="left_side">
			<SocialMedia social_media={social_media} />
		</div>
		<div className="right_side">
			<div className="copyright">{copyright}</div>
		</div>
		<style jsx>{`
			.footer {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				flex-wrap: wrap;
				align-items: center;
				position: relative;
			}
			.left_side,
			.right_side{
				flex-basis: 100%:
			}
			@media(min-width: 48rem){
				.left_side,
				.right_side{
					flex-basis: auto;
				}
			}
		`}</style>
	</div>
);
