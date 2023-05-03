function Item({ value, onClick }) {
	return (
		<div
			className="w-[33.333%] h-[33.333%] flex justify-center items-center text-[50px] font-bold cursor-pointer"
			onClick={onClick}
		>
			{value === true && "O"}
			{value === false && "X"}
		</div>
	);
}

export default Item;
