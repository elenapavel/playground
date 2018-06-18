import { Component } from "react";
import { Gmaps, Marker, InfoWindow, Circle } from "react-gmaps";
import Form from "~/components/Form";
import $ from "./style.css";

const fields = [
	{
		type: "text",
		icon: "",
		placeholder: "Name",
		ref: "name",
		background: "#e6f0fc",
	},
	{
		type: "email",
		icon: "",
		placeholder: "Email",
		ref: "email",
		background: "#e6f0fc",
	},
	{
		type: "text",
		icon: "",
		placeholder: "Subject",
		background: "#e6f0fc",
	},
	{
		type: "textarea",
		icon: "",
		placeholder: "Message",
		background: "#e6f0fc",
	},
];

const submitAction = {
	text: "Send",
};

const coords = {
	lat: 51.5258541,
	lng: -0.08040660000006028,
};

const params = { v: "3.exp", key: "YOUR_API_KEY" };

class ContactWS1 extends Component {
	onMapCreated(map) {
		map.setOptions({
			disableDefaultUI: true,
		});
	}

	onDragEnd(e) {
		console.log("onDragEnd", e);
	}

	onCloseClick() {
		console.log("onCloseClick");
	}

	onClick(e) {
		console.log("onClick", e);
	}

	render() {
		return (
			<b className={$.section}>
				<b className={$.content}>
					<b className={$.to_left}>
						<Gmaps
							lat={coords.lat}
							lng={coords.lng}
							zoom={12}
							loadingMessage={"Be happy"}
							params={params}
							onMapCreated={this.onMapCreated}
						>
							<Marker
								lat={coords.lat}
								lng={coords.lng}
								draggable={true}
								onDragEnd={this.onDragEnd}
							/>
							<InfoWindow
								lat={coords.lat}
								lng={coords.lng}
								content={"Hello, React :)"}
								onCloseClick={this.onCloseClick}
							/>
							<Circle
								lat={coords.lat}
								lng={coords.lng}
								radius={500}
								onClick={this.onClick}
							/>
						</Gmaps>
					</b>
					<b className={$.to_right}>
						<b className={$.heading}>Sign in</b>
						<b className={$.subheading}>
							Login to have access to files
						</b>
						<b className={$.login_action}>
							<Form
								fields={fields}
								submitActionText={submitAction.text}
							/>
						</b>
					</b>
				</b>
			</b>
		);
	}
}

export default ContactWS1;
