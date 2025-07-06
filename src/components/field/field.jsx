import PropTypes from 'prop-types';
import { FieldLayout } from './fieldLayout';

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	setWinner,
	isDraw,
	setIsDraw,
	winPatterns,
}) => {
	const defineWinner = () => {
		winPatterns.forEach((winPattern) => {
			if (winPattern.every((item) => field[item] === currentPlayer)) {
				setIsGameEnded(true);
				setWinner(currentPlayer);
			}
		});
		if (field.every((item) => !!item)) setIsDraw(true);
	};

	const fieldButtonHandle = (id) => {
		setField((prev) => {
			if (!prev[id]) {
				prev[id] = currentPlayer;
				setCurrentPlayer((prevPlayer) => {
					prevPlayer === 'X' ? (prevPlayer = 'O') : (prevPlayer = 'X');
					return prevPlayer;
				});
			}
			defineWinner();
			return prev;
		});
	};

	return (
		<FieldLayout
			field={field}
			fieldButtonHandle={fieldButtonHandle}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
		/>
	);
};

Field.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	setWinner: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	winPatterns: PropTypes.array,
};
