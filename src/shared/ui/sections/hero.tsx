'use client'

import { useSectionInView } from '@/shared/hooks/use-section-in-view'
import Image from 'next/image'

export function Hero() {
	const { ref } = useSectionInView('Головна')
	return (
		<section
			className='relative h-180 lg:h-225 flex gap-3 flex-col justify-end items-center w-full pb-26 md:pb-0 lg:pb-14'
			id='home'
			ref={ref}
		>
			<div className='absolute inset-0 horizontal-mask flex justify-center items-center w-full h-full z-0'>
				<Image
					src='/banner-1.jpeg'
					alt='banner'
					fill
					className='!relative vertical-mask-bottom'
					style={{ objectFit: 'cover', objectPosition: 'top' }}
				/>
			</div>

			<h1 className='text-[#e9ce84] text-center text-4xl md:text-[60px] font-bold w-full max-w-[650px] leading-10  md:leading-14 z-1'>
				Ляльководи епохи: Хто керує потоками мільярдів і медіа в Україні?
			</h1>

			<h4 className='w-wull max-w-120 p-3 text-[16px] text-center z-1 text-[#e9ce84]'>
				Незабаром — відеорозслідування, яке відкриє всі карти. Запам’ятай
				ці обличчя. І ці схеми.
			</h4>
		</section>
	)
}
