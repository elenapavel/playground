import Link from "next/link";
import SocialLinks from "~/components/SocialLinks";
import data from "./data";
import $ from "./style.css";

export default () => (
	<b className={$.section}>
		<b className={$.content}>
			{data.columns.map((column, key) => (
				<b className={$.column} key={key}>
					<b className={$.heading}>{column.heading}</b>
					<b className={$.column_content}>
						{column.type == "menu" ? (
							<b className={$.menu_items}>
								{column.items.map((item, index) => (
									<b className={$.menu_item} key={index}>
										<Link href={item.link}>
											<a>{item.name}</a>
										</Link>
									</b>
								))}
							</b>
						) : column.type == "address" ? (
							<b className={$.contact}>
								{column.items.email != null ? (
									<b className={$.email}>
										<Link
											href={`mailto:${
												column.items.email
											}`}
										>
											<a>{column.items.email}</a>
										</Link>
									</b>
								) : null}
								{column.items.address != null ? (
									<b className={$.address}>
										{column.items.address}
									</b>
								) : null}
								{column.items.phone != null ? (
									<b className={$.phone}>
										<Link
											href={`tel:${column.items.phone}`}
										>
											<a>{column.items.phone}</a>
										</Link>
									</b>
								) : null}
							</b>
						) : column.type == "social" ? (
							<b className={$.social_media}>
								<SocialLinks items={column.items} />
							</b>
						) : null}
					</b>
				</b>
			))}
		</b>
		<b className={$.separator} />
		<b className={$.to_bottom}>
			<b className={$.to_left}>
				{data.menu.length ? (
					<b className={$.menu}>
						{data.menu.map((item, key) => (
							<b className={$.item} key={key}>
								<Link href={item.link}>
									<a>{item.name}</a>
								</Link>
							</b>
						))}
					</b>
				) : null}
			</b>
			<b className={$.to_right}>
				<b className={$.copyright}>{data.copyright}</b>
			</b>
		</b>
	</b>
);
