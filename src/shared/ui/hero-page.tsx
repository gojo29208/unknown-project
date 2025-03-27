import { Timer } from './timer'

export function HeroPage() {
	return (
		<div className='min-[520px]:w-md md:w-xl lg:w-3xl w-full mx-auto p-4 border rounded-xl space-y-4 text-center font-sans'>
			{/* Header */}
			<div className='border rounded-md py-2 px-4 text-sm font-semibold uppercase'>
				Страна Должна знать
				<br />
				Своих ГЕРОЕВ
			</div>

			<Timer />

			{/* Play Button */}
			<div className='border rounded-md p-10 aspect-video flex justify-center items-center'>
				<div className='w-12 h-12 mx-auto bg-black text-white rounded-full flex items-center justify-center'>
					▶
				</div>
			</div>

			{/* Фото блок */}
			<div className='grid grid-cols-3 gap-2'>
				{['Фото', 'Фото', 'Фото'].map((label, index) => (
					<div
						key={index}
						className='border rounded-md py-6 text-xs text-gray-600 aspect-square flex items-center justify-center'
					>
						{label}
					</div>
				))}
			</div>

			{/* Empty text block */}
			<div className='border rounded-md py-6' />

			{/* Контакты */}
			<div className='text-sm text-gray-700 space-y-1'>
				<div>@TGNIK</div>
				<div>gjkgjkj@proton - MAIL</div>
			</div>
		</div>
	)
}
