'use client'

import { newsItems } from '@/shared/data/news-data'
import { useSectionInView } from '@/shared/hooks/use-section-in-view'
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

export function NewsCarousel() {
	const { ref } = useSectionInView('Новини')
	return (
		<section
			className='relative flex flex-col justify-center items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
			id='news'
			ref={ref}
		>
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
							<Link href={`/news/${item.slug}`}>
								<div className='h-full flex flex-col overflow-hidden rounded-3xl  bg-zinc-900'>
									<div className='relative h-48 sm:h-56 md:h-64'>
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

									<div className='p-4 flex flex-col flex-grow'>
										<h3 className='text-white text-lg sm:text-xl font-bold mb-2'>
											{item.title}
										</h3>
										<p className='text-gray-400 text-sm sm:text-base mb-4 flex-grow'>
											{item.description}
										</p>
										<div className='mt-auto'>
											<div className='inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors'>
												Дізнатись більше <ArrowRight className='ml-2 h-4 w-4' />
											</div>
										</div>
									</div>
								</div>
							</Link>
						</CarouselItem>
					))}
				</CarouselContent>
				<p className='text-xs italic text-center mt-4 text-white opacity-70'>
					* На зображеннях моста — реальні фотографії
				</p>
				<div className='flex justify-center mt-6 gap-4'>
					<CarouselPrevious className='!relative cursor-pointer [&>svg]:size-6! left-auto !translate-none w-12 h-12 rounded-full bg-yellow-500! hover:bg-yellow-400 flex items-center justify-center text-black transition-colors' />
					<CarouselNext className='!relative [&>svg]:size-6! cursor-pointer right-auto !translate-none w-12 h-12 rounded-full bg-yellow-500! hover:bg-yellow-400 flex items-center justify-center text-black transition-colors' />
				</div>
			</Carousel>
		</section>
	)
}
