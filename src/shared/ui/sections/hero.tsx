import Image from 'next/image'

export function Hero() {
	return (
		<div className='relative z-[-1] h-180 lg:h-237.5 flex justify-center items-center mb-15 md:mb-20'>
			<div className='horizontal-mask flex justify-center items-center w-full h-full'>
				<Image
					src='/banner.jpeg'
					alt='banner'
					fill
					className='!relative vertical-mask-bottom'
					style={{ objectFit: 'cover', objectPosition: 'center' }}
				/>
			</div>

			<h1 className='absolute bottom-20 left-1/2 -translate-x-1/2 text-white text-center text-4xl md:text-[70px] font-bold w-full max-w-[1016px] leading-17'>
				Ляльководи епохи: Хто керує потоками мільярдів і медіа в Україні?
			</h1>

			<h4 className='absolute -bottom-16 right-1/3 w-54 text-[16px]'>
				Незабаром — відеорозслідування, яке відкриє всі карти. Запам’ятай
				ці обличчя. І ці схеми.
			</h4>
		</div>
	)
}
