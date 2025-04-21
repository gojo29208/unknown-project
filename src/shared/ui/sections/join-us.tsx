export function JoinUs() {
	return (
		<div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mb-5 md:mb-20'>
			<StatsCard heading='14,5 млрд' subheading='Грн з бюджету Києва' />
			<StatsCard heading='7 млрд' subheading='На міст в бік Білорусі' />
			<StatsCard heading='Офшори' subheading='на Мадейрі' />
		</div>
	)
}

type StatsCardProps = {
	heading: string
	subheading: string
}

const StatsCard = ({ heading, subheading }: StatsCardProps) => {
	return (
		<div className='bg-[#1e1b14] rounded-3xl p-6 md:p-8'>
			<h2 className='text-[#f0c95c] text-4xl md:text-5xl lg:text-6xl font-bold mb-1'>
				{heading}
			</h2>
			<p className='text-[#f0c95c] text-lg md:text-xl opacity-90'>
				{subheading}
			</p>
		</div>
	)
}
