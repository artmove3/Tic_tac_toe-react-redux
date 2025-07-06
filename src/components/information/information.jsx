import PropTypes from 'prop-types';
import { InformationLayout } from './informationLayout';

export const Information = ({ isGameEnded, isDraw, currentPlayer, winner }) => {
	const defineInfo = () => {
		if (isDraw) return 'Ничья';
		else if (!isDraw && isGameEnded) return `Победа ${winner}`;
		else return `Ходит ${currentPlayer}`;
	};
	return <InformationLayout defineInfo={defineInfo} />;
};

Information.propTypes = {
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	currentPlayer: PropTypes.string,
	winner: PropTypes.string,
};
