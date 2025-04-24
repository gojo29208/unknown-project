'use client'

import { useEffect, useState } from 'react'

export function Timer() {
	const [time, setTime] = useState(433 * 3600 + 43 * 60 + 32) // seconds

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(prev => (prev > 0 ? prev - 1 : 0))
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	const formatTimeParts = (seconds: number) => {
		const h = Math.floor(seconds / 3600)
			.toString()
			.padStart(3, '0')
		const m = Math.floor((seconds % 3600) / 60)
			.toString()
			.padStart(2, '0')
		const s = (seconds % 60).toString().padStart(2, '0')
		return [h, m, s]
	}

	const [hours, minutes, seconds] = formatTimeParts(time)

	return (
		<div className='px-5 w-full mb-10'>
			<div className='flex items-center justify-center gap-1 md:gap-4 border border-[#333] rounded-[30px] p-10 w-full mx-auto md:h-[765px] max-[500px]:h-[257px] max-md:aspect-video!'>
				<div className='bg-[#1a1a1a] text-white text-[20px] sm:text-[30px] md:text-[80px] font-bold p-5 rounded-[16px] w-max text-center'>
					{hours}
				</div>

				<div className='text-white text-[80px] mx-[10px] flex flex-col items-center justify-center'>
					<div className='w-[5px] h-[5px] sm:w-[8px] sm:h-[8px] md:w-[12px] md:h-[12px] bg-white rounded-full my-[8px]'></div>
					<div className='w-[5px] h-[5px] sm:w-[8px] sm:h-[8px] md:w-[12px] md:h-[12px] bg-white rounded-full my-[8px]'></div>
				</div>

				<div className='bg-[#1a1a1a] text-white text-[20px] sm:text-[30px] md:text-[80px] font-bold p-5 rounded-[16px]  w-max text-center'>
					{minutes}
				</div>

				<div className='text-white text-[80px] mx-[10px] flex flex-col items-center justify-center'>
					<div className='w-[5px] h-[5px] sm:w-[8px] sm:h-[8px] md:w-[12px] md:h-[12px] bg-white rounded-full my-[8px]'></div>
					<div className='w-[5px] h-[5px] sm:w-[8px] sm:h-[8px] md:w-[12px] md:h-[12px] bg-white rounded-full my-[8px]'></div>
				</div>

				<div className='bg-[#1a1a1a] text-white text-[20px] sm:text-[30px] md:text-[80px] font-bold p-5 rounded-[16px] w-[80px] md:w-[160px] text-center'>
					{seconds}
				</div>
			</div>
		</div>
	)
}
