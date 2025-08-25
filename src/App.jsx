import { useEffect, useState } from 'react';
import styles from './App.module.css';

import { Field } from './components/field/field';

import { store } from './redux/createStore';

function App() {
	const [appState, setAppState] = useState({});

	useEffect(() => {
		setAppState(store.getState());
	}, []);

	const restartButtonHandler = () => {
		store.dispatch({ type: 'RESTART_GAME' });
		setAppState(store.getState());
	};

	return (
		<div className={styles.app}>
			<Field />
			<button onClick={restartButtonHandler}>Начать заново</button>
		</div>
	);
}

export default App;
