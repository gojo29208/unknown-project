'use client'

import Telegram from '@root/public/telegram.svg'
// import Youtube from '@root/public/youtube.svg'
import { useSectionInView } from '@/shared/hooks/use-section-in-view'
import Mail from '@root/public/mail.svg'
import { ExternalLink } from 'lucide-react'

export function SocialLinks() {
	const { ref } = useSectionInView('Контакти')
	return (
		<section
			className='relative flex flex-col gap-2 px-4 justify-center items-center mb-5 md:mb-5'
			id='contact'
			ref={ref}
		>
			<div className='relative flex flex-col justify-center items-center w-full'>
				<h2 className='text-white text-center text-3xl md:text-[50px] font-bold w-full max-w-[580px] md:leading-17 pb-5'>
					Відкрий очі прямо <br /> зараз: правду більше не сховають!
				</h2>
				<h4 className='max-w-140 w-full text-[16px] text-center'>
					Якщо у вас є доступ до будь-яких матеріалів, будемо вдячні, якщо
					поділитеся ними з нами — ми готові запропонувати винагороду.
				</h4>
			</div>

			<div className='w-full p-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto'>
					{/* Telegram Link */}
					<div className='bg-zinc-900 rounded-lg p-4 flex items-center justify-between gap-3 lg:min-w-[250px]'>
						<div className='flex items-center gap-3'>
							<Telegram />
						</div>
						<div className='flex w-full flex-col items-start justify-start text-gray-400 hover:text-white transition-colors'>
							<div className='text-white text-lg font-bold'>@telegram</div>
							<div className='flex justify-center items-center w-max text-[12px] cursor-pointer'>
								<span className='mr-1'>Підписатись</span>
								<ExternalLink className='w-4 h-4' />
							</div>
						</div>
					</div>

					{/* YouTube Link */}
					{/* <div className='bg-zinc-900 rounded-lg p-4 flex items-center justify-between gap-3 lg:min-w-[250px]'>
						<div className='flex items-center gap-3'>
							<Youtube className='w-12 h-12' />
						</div>
						<div className='flex w-full flex-col items-start justify-start text-gray-400 hover:text-white transition-colors'>
							<div className='text-white text-lg font-bold'>NameChanel</div>
							<div className='flex justify-center items-center w-max text-[12px] cursor-pointer'>
								<span className='mr-1'>Підписатись</span>
								<ExternalLink className='w-4 h-4' />
							</div>
						</div>
					</div> */}

					{/* Email Link */}
					<div className='bg-zinc-900 rounded-lg p-4 flex items-center justify-between gap-3 lg:min-w-[250px]'>
						<div className='flex items-center gap-3'>
							<Mail className='w-8 h-8 text-black' />
						</div>
						<div className='flex w-full flex-col items-start justify-start text-gray-400 hover:text-white transition-colors'>
							<div className='text-white text-lg font-bold'>
								ggmail@tuta.com
							</div>
							<div className='flex justify-center items-center w-max text-[12px] cursor-pointer'>
								<span className='mr-1'>Отримати</span>
								<ExternalLink className='w-4 h-4' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
