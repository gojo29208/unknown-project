import { LoaderCircle } from 'lucide-react'
import Image from 'next/image'
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

			<div className='w-full aspect-video rounded-2xl border-[1px] flex justify-center items-center'>
				<LoaderCircle className='w-[45px] h-[45px] animate-spin' />
			</div>


			{/* <iframe
				className='w-full aspect-video rounded-2xl'
				src='https://www.youtube.com/embed/pu5lh0CCZyQ'
				title='В Украине заговорили о смерти Путина / Сорвана спецоперация'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowFullScreen
			/> */}


			{/* Фото блок */}
			<div className='flex flex-wrap gap-2'>
				{[
					'/image-template.png',
					'/image-template.png',
					'/image-template.png',
				].map((src, index) => (
					<Image
						key={index}
						src={src}
						className='relative! flex-1 text-gray-600 flex items-center justify-center overflow-hidden rounded-2xl'
						alt='image'
						width={100}
						height={100}
						style={{ objectFit: 'cover', objectPosition: 'center' }}
					/>
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
