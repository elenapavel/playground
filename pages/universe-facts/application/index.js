import { Provider, connect } from "unistore/react";
import store from "./store";
import actions from "./actions";

export const module = (name, handler) => {
	const connector = connect(name, actions);
	const Module = connector(handler);

	return <Module />;
};

export default props => <Provider store={store}>{props.children}</Provider>;
