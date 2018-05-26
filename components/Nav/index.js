import Link from "next/link";
import { URL } from "~/playground";

const Nav = () => (
	<nav>
		<ul>
			<li>
				<Link href={URL + "/"}>
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link href={URL + "/architecture"}>
					<a>Architecture</a>
				</Link>
			</li>
			<li>
				<Link href={URL + "/books"}>
					<a>Books</a>
				</Link>
			</li>
			<li>
				<Link href={URL + "/universe-facts"}>
					<a>Universe Facts</a>
				</Link>
			</li>
			<li>
				<Link href={URL + "/plants"}>
					<a>Plants</a>
				</Link>
			</li>
			<li>
				<Link href={URL + "/calendar"}>
					<a>Calendar</a>
				</Link>
			</li>
			<li>
				<Link href={URL + "/responsive-layout"}>
					<a>Responsive Layout</a>
				</Link>
			</li>
			<li>
				<Link href={URL + "/grid"}>
					<a>Grid</a>
				</Link>
			</li>
		</ul>
		<style jsx>{`
			nav {
				text-align: center;
				border-bottom: 1px solid rgba(255, 0, 0, 0.7);
			}
			ul {
				display: flex;
				justify-content: space-between;
			}
			nav > ul {
				padding: 4px 16px;
			}
			li {
				display: flex;
				padding: 6px 8px;
			}
			a {
				color: #067df7;
				text-decoration: none;
				font-size: 13px;
			}
		`}</style>
	</nav>
);

export default Nav;
