'use client'

import { useSectionInView } from '@/shared/hooks/use-section-in-view'
import { Timer } from './timer'

export function Video() {
	const { ref } = useSectionInView('Відео')
	return (
		<section className='relative flex flex-col justify-center items-center w-full gap-4 px-5' id='video' ref={ref}>
			<p className='text-2xl text-center text-[#C62828] uppercase'>Coming soon</p>
			<h2 className='text-white text-center text-3xl md:text-[50px] font-bold w-full max-w-[580px] md:leading-13'>
				Незабаром <br /> грандіозне викриття корупційних схем
			</h2>
			<h4 className='w-full max-w-155 text-[16px] text-center'>
				Вони будують мости, метро та імперії за наш рахунок, після того
				як вкрали 70% бюджету. Хто насправді стоїть за кулісами «70%
				будівельного бюджету»?
			</h4>
			<Timer/>
		</section>
	)
}
