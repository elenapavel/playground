import Link from "next/link";
import data from "./data";
import $ from "./style.css";

export default () => (
	<b className={$.section}>
		<b className={$.container}>
			<b className={$.content}>
				<b className={$.heading}>{data.heading}</b>
				<b className={$.description}>{data.description}</b>
				<b className={$.read_more_action}>
					<Link href={data.readMoreLink}>
						<a>
							{data.readMoreText}
							<i className={$.read_more_icon} />
						</a>
					</Link>
				</b>
			</b>
			<b
				className={$.preview_image}
				style={{ backgroundImage: `url(${data.previewImage})` }}
			/>
		</b>
	</b>
);
