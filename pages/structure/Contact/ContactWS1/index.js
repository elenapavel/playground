import React, { Component } from "react";
import { Gmaps, Marker, InfoWindow, Circle } from "react-gmaps";
import Form from "./Form";
import data from "./data";
import $ from "./style.css";

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
							lat={data.map.coords.lat}
							lng={data.map.coords.lng}
							zoom={12}
							loadingMessage={data.map.loadingMessage}
							params={data.map.params}
							onMapCreated={this.onMapCreated}
						>
							<Marker
								lat={data.map.coords.lat}
								lng={data.map.coords.lng}
								draggable={true}
								onDragEnd={this.onDragEnd}
							/>
							<InfoWindow
								lat={data.map.coords.lat}
								lng={data.map.coords.lng}
								content={data.map.infoBox}
								onCloseClick={this.onCloseClick}
							/>
							<Circle
								lat={data.map.coords.lat}
								lng={data.map.coords.lng}
								radius={500}
								onClick={this.onClick}
							/>
						</Gmaps>
					</b>
					<b className={$.to_right}>
						<b className={$.heading}>{data.form.heading}</b>
						<b className={$.subheading}>{data.form.subheading}</b>
						<b className={$.login_action}>
							<Form
								fields={data.form.fields}
								submitActionText={data.form.submitAction.text}
							/>
						</b>
					</b>
				</b>
			</b>
		);
	}
}

export default ContactWS1;
