import { useState } from 'react';
import { store } from '../../redux/createStore';
import styles from './field.module.css';

export const Field = () => {
	const [fieldState, setFieldState] = useState({});
	const { field, currentPlayer, isGameEnded, isDraw, info } = store.getState();

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const defineWinner = () => {
		WIN_PATTERNS.forEach((winPattern) => {
			if (winPattern.every((item) => field[item] === currentPlayer)) {
				store.dispatch({ type: 'END_GAME', payload: currentPlayer });
			}
		});
		if (field.every((item) => !!item)) store.dispatch({ type: 'END_GAME_DRAW' });
	};

	const fieldButtonHandle = (id) => {
		if (!field[id]) {
			setFieldState(store.getState());
			store.dispatch({ type: 'SET_FIELD', payload: id });
			store.dispatch({ type: 'CHANGE_CURRENT_PLAYER' });
			defineWinner();
			setFieldState(store.getState());
			console.log(store.getState().info);
		}
	};

	return (
		<>
			<div>{info}</div>
			<div className={styles.fieldContainer}>
				{field.map((el, i) => {
					return (
						<button
							className={styles.fieldButton}
							key={i}
							id={i}
							disabled={isGameEnded || isDraw}
							onClick={() => fieldButtonHandle(i)}
						>
							{el}
						</button>
					);
				})}
			</div>
		</>
	);
};
