import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement } from '../features/counter/counterSlice';
import { increment, decrement } from '../features/counter/ageSlice';

export function Counter() {
	const count = useSelector((state) => state.age.value);
	const dispatch = useDispatch();

	return (
		<>
			<button
				aria-label="Increment value"
				onClick={() => dispatch(increment())}>
				Increment
			</button>
			<button
				aria-label="Decrement value"
				onClick={() => dispatch(decrement())}>
				Decrement
			</button>
			<span>{count}</span>
		</>
	);
}
