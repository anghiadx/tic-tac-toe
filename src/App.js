import { useState, useEffect } from "react";
import "./App.css";
import Item from "./components/Item";
import Notify from "./components/Notify";

function App() {
	const [gameData, setGameData] = useState([
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]);
	const [turn, setTurn] = useState(false);
	const [selected, setSelected] = useState([]);
	const [victory, setVictory] = useState(false);
	const [equal, setEqual] = useState(false);

	useEffect(() => {
		if (selected.length !== 0) {
			const lastSelected = selected[selected.length - 1];
			const { x, y } = lastSelected;

			const victory = checkVictory(x, y);

			if (victory) {
				// Show Victory
				setVictory(true);
				return;
			}

			selected.length >= 9 ? setEqual(true) : setTurn(!turn);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selected]);

	const resetDataGame = () => {
		setGameData([
			[null, null, null],
			[null, null, null],
			[null, null, null],
		]);

		setSelected([]);
		setVictory(false);
		setEqual(false);
	};

	const checkVictory = (x, y) => {
		const dataVictory = [
			// Hang doc
			[
				[x, 0],
				[x, 1],
				[x, 2],
			],

			// Hang ngang
			[
				[0, y],
				[1, y],
				[2, y],
			],

			// Hang cheo 1
			[
				[0, 0],
				[1, 1],
				[2, 2],
			],

			// Hang cheo 2
			[
				[2, 0],
				[1, 1],
				[0, 2],
			],
		];

		const victory = dataVictory.some((victoryItem) => {
			const victoryCheck = victoryItem.every((subItem) => {
				const [x, y] = subItem;
				return gameData[y][x] === turn;
			});

			return victoryCheck;
		});

		return victory;
	};

	const handleClickItem = (x, y) => {
		console.log("click");
		const newSelected = [...selected];
		const dataSelected = { x, y };
		newSelected.push(dataSelected);

		const newGameData = [...gameData];
		newGameData[y][x] = turn;

		setSelected(newSelected);
		setGameData(newGameData);
	};

	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="w-[350px] h-[350px] bg-cover bg-center bg-background flex flex-wrap">
				{/* Render Item */}
				{gameData.reduce((acc, row, y) => {
					const rowData = row.map((itemValue, x) => {
						const isActive = selected.some((selectedItem) => {
							return selectedItem.x === x && selectedItem.y === y;
						});

						const handleClick = isActive ? null : handleClickItem.bind(this, x, y);

						return <Item key={Math.random()} value={itemValue} onClick={handleClick} />;
					});

					return acc.concat(rowData);
				}, [])}
			</div>

			{victory && (
				<Notify
					content={`Chúc mừng người chơi ${turn ? "O" : "X"} đã giành chiến thắng!`}
					onClick={resetDataGame}
				/>
			)}

			{equal && <Notify content={`Không có người chơi nào giành chiến thắng (v_v)`} onClick={resetDataGame} />}
		</div>
	);
}

export default App;
