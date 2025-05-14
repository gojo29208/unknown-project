'use client'

import { useEffect, useState } from 'react'

// Цільова дата у Києві (UTC+3)
const targetDate = new Date('2025-05-31T16:47:00.000Z') // UTC: 19:47 Kyiv = 16:47 UTC

export function Timer() {
	const getRemainingSeconds = () => {
		const now = new Date()
		const diffMs = targetDate.getTime() - now.getTime()
		return Math.max(Math.floor(diffMs / 1000), 0)
	}

	const [time, setTime] = useState(getRemainingSeconds())

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(getRemainingSeconds())
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	const formatTimeParts = (seconds: number) => {
		const d = Math.floor(seconds / (3600 * 24))
		const h = Math.floor((seconds % (3600 * 24)) / 3600)
		const m = Math.floor((seconds % 3600) / 60)
		const s = seconds % 60

		return [
			d.toString().padStart(2, '0'),
			h.toString().padStart(2, '0'),
			m.toString().padStart(2, '0'),
			s.toString().padStart(2, '0'),
		]
	}

	const [days, hours, minutes, seconds] = formatTimeParts(time)

	return (
		<div className='w-full'>
			<div className='flex items-center justify-center gap-1 md:gap-4 border border-[#333] rounded-[30px] p-10 w-full mx-auto md:h-[765px] max-[500px]:h-[257px] max-md:aspect-video!'>
				<div className='relative bg-[#1a1a1a] text-white text-[20px] sm:text-[30px] md:text-[80px] font-bold p-5 rounded-[16px] w-max text-center'>
					{days}
					<div className='-top-6 absolute left-1/2 transform -translate-x-1/2 text-sm'>
						днів
					</div>
				</div>

				<div className='text-white text-[20px] sm:text-[30px] md:text-[60px] font-bold mx-[5px]'>
					:
				</div>

				<div className='relative bg-[#1a1a1a] text-white text-[20px] sm:text-[30px] md:text-[80px] font-bold p-5 rounded-[16px] w-max text-center'>
					{hours}
					<div className='-top-6 absolute left-1/2 transform -translate-x-1/2 text-sm'>
						годин
					</div>
				</div>

				<div className='text-white text-[20px] sm:text-[30px] md:text-[60px] font-bold mx-[5px]'>
					:
				</div>

				<div className='relative bg-[#1a1a1a] text-white text-[20px] sm:text-[30px] md:text-[80px] font-bold p-5 rounded-[16px] w-max text-center'>
					{minutes}
					<div className='-top-6 absolute left-1/2 transform -translate-x-1/2 text-sm'>
						хвилин
					</div>
				</div>

				<div className='text-white text-[20px] sm:text-[30px] md:text-[60px] font-bold mx-[5px]'>
					:
				</div>

				<div className='relative bg-[#1a1a1a] text-white text-[20px] sm:text-[30px] md:text-[80px] font-bold p-5 rounded-[16px] w-[80px] md:w-[160px] text-center'>
					{seconds}
					<div className='-top-6 absolute left-1/2 transform -translate-x-1/2 text-sm'>
						секунд
					</div>
				</div>
			</div>
		</div>
	)
}
