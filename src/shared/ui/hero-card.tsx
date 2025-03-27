import { Timer } from './timer'

export function HeroCard() {
	return (
		<div className='min-[520px]:w-md md:w-xl lg:w-3xl w-full mx-auto p-4 space-y-4 text-center font-sans'>
			{/* Header */}
			<div className='py-2 px-4 text-sm font-semibold uppercase md:text-xl'>
				Страна Должна знать
				<br />
				Своих ГЕРОЕВ
			</div>

			<Timer />

			{/* Play Button */}

			<iframe
				className='w-full aspect-video rounded-2xl'
				src='https://www.youtube.com/embed/pu5lh0CCZyQ'
				title='В Украине заговорили о смерти Путина / Сорвана спецоперация'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowFullScreen
			></iframe>

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
			<div className='text-2xl py-6 flex justify-center items-center'>
				Какой-то текст
			</div>

			{/* Контакты */}
			<div className='text-sm text-gray-700 space-y-1'>
				<div>@TGNIK</div>
				<div>gjkgjkj@proton - MAIL</div>
			</div>
		</div>
	)
}
