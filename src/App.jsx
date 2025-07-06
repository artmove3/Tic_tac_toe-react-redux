import { useState } from 'react';
import styles from './App.module.css';
import { Information } from './components/information/information';
import { Field } from './components/field/field';

function App() {
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [winner, setWinner] = useState('');

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

	const restartButtonHandler = () => {
		setField(['', '', '', '', '', '', '', '', '']);
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setWinner('');
	};

	return (
		<div className={styles.app}>
			<Information
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				currentPlayer={currentPlayer}
				winner={winner}
			/>
			<Field
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				isDraw={isDraw}
				setIsDraw={setIsDraw}
				setWinner={setWinner}
				winPatterns={WIN_PATTERNS}
			/>
			<button onClick={() => restartButtonHandler()}>Начать заново</button>
		</div>
	);
}

export default App;
