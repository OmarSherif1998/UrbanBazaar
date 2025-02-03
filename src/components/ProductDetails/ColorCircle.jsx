/** @format */
const ColorCircle = ({ bg, isSelected, onSelect }) => {
	return (
		<button
			role='button'
			tabIndex={0}
			onClick={onSelect}
			onKeyDown={(e) => e.key === 'Enter' && onSelect()}
			aria-label={`Select color ${bg}`}
			aria-checked={isSelected}
			className={`relative w-8 h-8 rounded-full transition-all duration-200
        shadow-sm hover:scale-110 active:scale-95 focus-visible:outline-none 
        focus-visible:ring-2 focus-visible:ring-gray-800 ${bg} ${
				isSelected
					? 'ring-2 ring-gray-800 ring-offset-2'
					: 'ring-1 ring-gray-200'
			}`}
			style={{
				transformStyle: 'preserve-3d',
				willChange: 'transform',
			}}
		>
			{isSelected && (
				<div className='absolute inset-0 flex items-center justify-center'>
					<div className='w-5 h-5 bg-white/80 rounded-full backdrop-blur-sm' />
				</div>
			)}
		</button>
	);
};

export default ColorCircle;
