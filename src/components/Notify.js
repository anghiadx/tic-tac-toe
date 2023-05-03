function Notify({ content, onClick }) {
	return (
		<div className="flex justify-center fixed inset-0 bg-[rgba(1,1,1,0.5)] animate-show-notify">
			<div className="flex flex-col items-center w-[300px] h-[150px] bg-white rounded-[2px] p-[12px] pt-[30px] mt-[12px] animate-show-panel-nottify">
				<p className="grow text-center">{content}</p>
				<button className="px-[28px] py-[4px] bg-[green] font-bold text-white" onClick={onClick}>
					Làm mới
				</button>
			</div>
		</div>
	);
}

export default Notify;
