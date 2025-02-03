/** @format */

function Delivery({ deliveryType }) {
	const deliveryInfo = {
		standard: {
			arrival: '2-4 business days',
			returnPolicy: '14-day return policy',
			extraCharge: 'No extra charge',
			returnFees: 'No return fees',
			icon: '🚚', // Delivery truck emoji
			bgColor: 'bg-blue-50', // Light blue background
			textColor: 'text-blue-700', // Blue text
			borderColor: 'border-blue-200', // Blue border
		},
		urbanPlus: {
			arrival: '1-2 business days',
			returnPolicy: '30-day return policy',
			extraCharge: '$10 extra charge',
			returnFees: 'No return fees',
			icon: '🚀', // Rocket emoji
			bgColor: 'bg-purple-50', // Light purple background
			textColor: 'text-purple-700', // Purple text
			borderColor: 'border-purple-200', // Purple border
		},
	};

	const {
		arrival,
		returnPolicy,
		extraCharge,
		returnFees,
		icon,
		bgColor,
		textColor,
		borderColor,
	} = deliveryInfo[deliveryType];

	return (
		<div
			className={`w-full mt-6 p-6 ${bgColor} shadow-lg rounded-xl border ${borderColor}`}
		>
			<div className='flex items-center mb-4'>
				<span className='text-3xl mr-3'>{icon}</span>
				<h2 className={`text-2xl font-bold ${textColor}`}>
					{deliveryType === 'standard'
						? 'Standard Delivery'
						: 'Urban PLUS Delivery'}
				</h2>
			</div>
			<div className='space-y-3'>
				<p className='flex items-center'>
					<span className='font-medium mr-2'>📦 Time of Arrival:</span>{' '}
					{arrival}
				</p>
				<p className='flex items-center'>
					<span className='font-medium mr-2'>📄 Return Policy:</span>{' '}
					{returnPolicy}
				</p>
				<p className='flex items-center'>
					<span className='font-medium mr-2'>💳 Extra Charge:</span>{' '}
					{extraCharge}
				</p>
				<p className='flex items-center'>
					<span className='font-medium mr-2'>🔄 Return Fees:</span> {returnFees}
				</p>
			</div>
			<div className='mt-6'>
				<p className={`text-sm ${textColor}`}>
					{deliveryType === 'standard'
						? 'Enjoy hassle-free delivery with no extra charges!'
						: 'Get your order faster with Urban PLUS and enjoy extended return benefits!'}
				</p>
			</div>
		</div>
	);
}

export default Delivery;
