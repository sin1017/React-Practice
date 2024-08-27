import './App.css';
import { useState } from 'react';
import Board, { BoardType } from './component/Board';

function App() {
	const [history, setHistory] = useState<BoardType[]>([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState<number>(0); // 用來跟蹤查看目前 user 正在查看的步驟
	const isNext: boolean = currentMove % 2 === 0; // 依照當下的步數，推斷出下一步應該是 O or X，而因決定下的是 X 還是 O 是用 boolean 來決定的，所以這邊用取餘數來知道是 0 或 1 ，來給予 boolean 值
	const currentSquares = history[currentMove];
	console.log('isNext', isNext);
	console.log('currentMove', currentMove);

	function handelPlay(nextSquares: BoardType) {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; // 這邊在 slice 後面添加 0 , currentMove + 1 用意是，假如 user 去點選歷史步驟做查看時，只想保留從 0 開始到選取的步驟的部分。 ex: 第三步，那麼會保留 0 - 3 後面的操作都將不顯示
		// console.log('player length', nextHistory.length);

		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1); // 每次下新一步時，需要更新 currentMove 指向最新的 history
	}

	function jumpTo(nextMove: number) {
		setCurrentMove(nextMove);
	}

	return (
		<>
			<div className="game">
				<div className="game-board">
					<Board
						isNext={isNext}
						boards={currentSquares}
						onPlay={handelPlay}
					/>
				</div>
				<div className="game-info">
					<ol>
						{history.map((square, move) => (
							<li key={`${square} - ${move}`}>
								<button onClick={() => jumpTo(move)}>
									{move > 0 ? `第 ${move} 步` : `第一步`}
								</button>
							</li>
						))}
					</ol>
				</div>
			</div>
		</>
	);
}

export default App;
