type Square = {
	value: string | null;
	onSquareClick: () => void;
};

export default function Square({ value, onSquareClick }: Square) {
	return (
		<button
			className="square"
			onClick={onSquareClick}>
			{value}
		</button>
	);
}
