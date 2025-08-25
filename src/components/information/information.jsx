import { store } from '../../redux/createStore';

export const Information = () => {
	const { info } = store.getState();

	return <div>{info}</div>;
};
