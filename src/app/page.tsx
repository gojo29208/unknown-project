import { Hero } from '@/shared/ui/sections/hero'
import { JoinUs } from '@/shared/ui/sections/join-us'
import { KeyFigures } from '@/shared/ui/sections/key-figures'
import { NewsCarousel } from '@/shared/ui/sections/news-carousel'
import { SocialLinks } from '@/shared/ui/sections/social-links'
import { Timer } from '@/shared/ui/sections/timer'
import { Video } from '@/shared/ui/sections/video'

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-items-center min-h-screen gap-2'>
			<main className='relative flex flex-col gap-[32px] row-start-2 items-center justify-center w-full min-[1440px]:w-360 overflow-hidden'>
				<Hero />

				<JoinUs />

				<Video />

				<Timer />

				<KeyFigures />

				<NewsCarousel />

				<SocialLinks />

				{/* <iframe
		className='w-full aspect-video rounded-2xl'
		src='https://www.youtube.com/embed/pu5lh0CCZyQ'
		title='В Украине заговорили о смерти Путина / Сорвана спецоперация'
		frameBorder='0'
		allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
		allowFullScreen
	/> */}

				{/* <ModeToggle /> */}
			</main>
		</div>
	)
}
