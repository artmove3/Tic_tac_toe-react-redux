import PropTypes from 'prop-types';
import styles from './field.module.css';

export const FieldLayout = ({ field, fieldButtonHandle, isGameEnded, isDraw }) => {
	return (
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
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	fieldButtonHandle: PropTypes.func,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};
