import Image from 'next/image'

export function Hero() {
	return (
		<div className='relative h-180 lg:h-267.5 flex gap-1 flex-col justify-end items-center mb-15 md:mb-20 w-full'>
			<div className='absolute inset-0 horizontal-mask flex justify-center items-center w-full h-full z-0'>
				<Image
					src='/banner.jpeg'
					alt='banner'
					fill
					className='!relative vertical-mask-bottom'
					style={{ objectFit: 'cover', objectPosition: 'center' }}
				/>
			</div>

			<h1 className='text-white text-center text-4xl md:text-[60px] font-bold w-full max-w-[650px] leading-14 z-1'>
				Ляльководи епохи: Хто керує потоками мільярдів і медіа в Україні?
			</h1>

			<h4 className='w-82 p-3 text-[16px] text-center z-1'>
				Незабаром — відеорозслідування, яке відкриє всі карти. Запам’ятай
				ці обличчя. І ці схеми.
			</h4>
		</div>
	)
}
