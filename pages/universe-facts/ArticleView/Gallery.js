import Item from "./Item";

import $ from "./style.css";

const Gallery = ({ items }) => (
	<div className={$.gallery_container}>
		{items != null && items.length
			? items.map((item, key) => (
					<Item key={key} index={key} backgroundImage={item.image} />
			  ))
			: null}
	</div>
);

export default Gallery;
