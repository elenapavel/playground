export default ({ social_media }) => {
	const facebook_color = "blue";
	const twitter_color = "darkblue";
	const pinterest_color = "red";
	return (
		<div className="social_media">
			{social_media.map((item, key) => {
				const item_key = Object.keys(item)[0];
				const item_value = Object.values(item)[0];
				const icon_path = "/static/social_icons/" + item_key + ".svg";
				const itemClasses = "social_item " + item_key;
				return (
					<div key={key} className={itemClasses}>
						<a href={item_value}>
							<img src={icon_path} />
						</a>
					</div>
				);
			})}
			<style jsx>{`
				.social_item img {
					width: 1rem;
					height: 1.3rem;
					vertical-align: top;
					padding-bottom: 0.3rem;
					border-bottom: 2px solid transparent;
					transition: all 0.3s ease-in-out;
				}
				.social_item {
					display: inline-block;
					padding: 0.3rem 0.3rem 0 0;
					margin-right: 0.5rem;
				}
				.facebook:hover img {
					border-color: ${facebook_color};
				}
				.twitter:hover img {
					border-color: ${twitter_color};
				}
				.pinterest:hover img {
					border-color: ${pinterest_color};
				}
			`}</style>
		</div>
	);
};
