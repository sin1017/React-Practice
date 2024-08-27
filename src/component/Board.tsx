import Square from './Square';

export type BoardType = (string | null)[];
type BoardProps = {
	isNext: boolean;
	boards: BoardType;
	onPlay: (value: BoardType) => void;
};

export default function Board({ boards, isNext, onPlay }: BoardProps) {
	const winner = checkWinner(boards);
	const status = winner ? `${winner} 獲勝` : `下一個是 ${isNext ? 'X' : 'O'}`;
	console.log(isNext);

	function handelClick(index: number) {
		if (boards[index] || checkWinner(boards)) return;

		const newBoards = boards.slice();
		newBoards[index] = isNext ? 'X' : 'O';
		onPlay(newBoards);
	}

	function checkWinner(board: BoardType) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				return board[a];
			}
		}

		return null;
	}

	return (
		<>
			<div className="status">{status}</div>
			<div className="board-row">
				{boards &&
					boards?.map((item, index) => (
						<Square
							key={index}
							value={item}
							onSquareClick={() => handelClick(index)}
						/>
					))}
			</div>
		</>
	);
}
