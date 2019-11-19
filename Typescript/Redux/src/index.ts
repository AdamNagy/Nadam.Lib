import { createStore } from "redux";

function counter(state = 0, action: any) {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
		default:
			return state;
	}
}

const store = createStore(counter);
(window as any).store = store;