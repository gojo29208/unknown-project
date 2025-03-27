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

	const formatTime = (seconds: number) => {
		const h = Math.floor(seconds / 3600)
			.toString()
			.padStart(3, '0')
		const m = Math.floor((seconds % 3600) / 60)
			.toString()
			.padStart(2, '0')
		const s = (seconds % 60).toString().padStart(2, '0')
		return `${h}:${m}:${s}`
	}
	return (
		<div className='text-4xl font-bold border rounded-md py-4'>
			{formatTime(time)}
		</div>
	)
}
