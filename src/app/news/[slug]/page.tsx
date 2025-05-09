import { newsItems } from '@/shared/data/news-data'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static'

type PageProps = {
	params: Promise<{
		slug: string
	}>
}

export default async function Page({ params }: PageProps) {
	const { slug } = await params

	const item = newsItems.find(item => item.slug === slug)

	if (!item) {
		return notFound()
	}

	return (
		<div className='min-h-screen flex flex-col items-center justify-start px-4 py-6'>
			<div className='h-full flex flex-col overflow-hidden rounded-3xl  bg-zinc-900'>
				<div className='relative '>
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
					<h1 className='text-white text-lg sm:text-3xl font-bold mb-2'>
						{item.title}
					</h1>
					<p className='text-gray-400 text-sm sm:text-2xl mb-4 flex-grow'>
						{item.description}
					</p>
				</div>
			</div>
		</div>
	)
}
