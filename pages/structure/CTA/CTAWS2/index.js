import SocialLinks from "~/components/SocialLinks";
import $ from "./style.css";

const items = {
	facebook: "https://facebook.com",
	twitter: "https://twitter.com",
	instagram: "https://instagram.com",
	googlePlus: "https://plus.google.com",
};

export default () => (
	<b className={$.section}>
		<b className={$.content}>
			<b className={$.heading}>Find us on</b>
			<b className={$.social_links}>
				<SocialLinks items={items} />
			</b>
		</b>
	</b>
);
