'use client'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/shared/ui/carousel'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type NewsItem = {
	id: number
	title: string
	subtitle: string
	description: string
	image: string
}

const newsItems: NewsItem[] = [
	{
		id: 1,
		title: 'Гранітний старт: як вантажник став мільйонером',
		subtitle: 'БІЗНЕС ПО-УКРАЇНСЬКИ: ГОЛОВНЕ - АДАПТИВНІСТЬ',
		description:
			"Як за три роки Шкіль скупив кар'єри по всій Україні завдяки загадковому «німцю» і офшорам",
		image: '/carousel-1.jpeg',
	},
	{
		id: 2,
		title: 'Міст у нікуди: мегапроєкт за 7 млрд',
		subtitle: 'РЕКЕТ #1 В УКРАЇНІ',
		description:
			'Чому будується новий міст під Черніговом у бік Білорусі, коли старого вистачало?',
		image: '/carousel-2.jpeg',
	},
	{
		id: 3,
		title: 'Медійна зачистка: Telegram-канали, Maybach і піар-кампанії',
		subtitle: 'ЛАДНО, І ТАК ЗІЙДЕ',
		description:
			'Як створюють "ідеальний образ" і зачищають критику довкола Шкіля через гроші та анонімні канали',
		image: '/carousel-3.jpeg',
	},
	{
		id: 4,
		title: 'Нові інвестиції: куди вкладати в 2025 році',
		subtitle: 'ФІНАНСОВІ СТРАТЕГІЇ',
		description:
			'Аналіз найперспективніших напрямків для інвестування в умовах нестабільної економіки',
		image: '/carousel-4.jpeg',
	},
]

export function NewsCarousel() {
	return (
		<div className='relative flex flex-col justify-center items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-5 md:mb-30'>
			<p className='text-sm text-center text-[#C62828] uppercase'>
				Розслідувальні блоги
			</p>
			<h2 className='text-white text-center text-3xl md:text-[50px] font-bold w-full max-w-[580px] md:leading-17 pb-15'>
				За лаштунками <br /> багатомільярдних бюджетних угод
			</h2>
			<Carousel
				className='w-full'
				opts={{ loop: true, slidesToScroll: 1, align: 'start' }}
			>
				<CarouselContent>
					{newsItems.map(item => (
						<CarouselItem key={item.id} className='md:basis-1/2 lg:basis-1/3'>
							<div className='h-full flex flex-col'>
								<div className='relative h-48 sm:h-56 md:h-64 overflow-hidden'>
									<Image
										fill
										src={item.image || '/placeholder.svg'}
										alt={item.title}
										className='!relative w-full h-full'
										style={{ objectFit: 'cover', objectPosition: 'center' }}
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent'></div>
									{/* <div className='absolute top-4 left-4 right-4'>
										<div className='text-yellow-400 font-bold text-sm sm:text-base md:text-lg'>
											{item.subtitle}
										</div>
									</div> */}
								</div>

								<div className='p-4 flex flex-col flex-grow rounded-3xl overflow-hidden! bg-zinc-900'>
									<h3 className='text-white text-lg sm:text-xl font-bold mb-2'>
										{item.title}
									</h3>
									<p className='text-gray-400 text-sm sm:text-base mb-4 flex-grow'>
										{item.description}
									</p>
									<div className='mt-auto'>
										<Link
											href='#'
											className='inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors'
										>
											Lear more <ArrowRight className='ml-2 h-4 w-4' />
										</Link>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className='flex justify-center mt-6 gap-4'>
					<CarouselPrevious className='!relative cursor-pointer [&>svg]:size-6! left-auto !translate-none w-12 h-12 rounded-full bg-yellow-500! hover:bg-yellow-400 flex items-center justify-center text-black transition-colors' />
					<CarouselNext className='!relative [&>svg]:size-6! cursor-pointer right-auto !translate-none w-12 h-12 rounded-full bg-yellow-500! hover:bg-yellow-400 flex items-center justify-center text-black transition-colors' />
				</div>
			</Carousel>
		</div>
	)
}
