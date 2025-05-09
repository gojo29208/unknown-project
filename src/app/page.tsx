import { Hero } from '@/shared/ui/sections/hero'
import { JoinUs } from '@/shared/ui/sections/join-us'
import { KeyFigures } from '@/shared/ui/sections/key-figures'
import { NewsCarousel } from '@/shared/ui/sections/news-carousel'
import { SocialLinks } from '@/shared/ui/sections/social-links'
import { Video } from '@/shared/ui/sections/video/video'

export default function Home() {
	return (
		<>
			<Hero />

			<JoinUs />

			<Video />

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
		</>
	)
}
