export const inintialState = {
	field: ['', '', '', '', '', '', '', '', ''],
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	info: 'Ходит Х',
};

export const reducer = (state = inintialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_USER_DATA': {
			return payload;
		}
		case 'SET_FIELD': {
			const { field, currentPlayer } = state;
			field[payload] = currentPlayer;
			return {
				...state,
				field,
			};
		}

		case 'CHANGE_CURRENT_PLAYER': {
			let { currentPlayer } = state;
			currentPlayer === 'X' ? (currentPlayer = 'O') : (currentPlayer = 'X');
			return {
				...state,
				currentPlayer,
				info: `Ходит ${currentPlayer}`,
			};
		}
		case 'END_GAME': {
			return {
				...state,
				isGameEnded: true,
				info: `победил ${payload}`,
			};
		}

		case 'END_GAME_DRAW': {
			return {
				...state,
				isDraw: true,
				info: `Ничья`,
			};
		}
		case 'RESTART_GAME': {
			return {
				field: ['', '', '', '', '', '', '', '', ''],
				currentPlayer: 'X',
				isGameEnded: false,
				isDraw: false,
				info: 'Ходит X',
			};
		}

		default:
			return state;
	}
};
