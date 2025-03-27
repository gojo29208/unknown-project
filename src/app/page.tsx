import { HeroCard } from '@/shared/ui/hero-card'
import { ModeToggle } from '@/shared/ui/switch-theme'

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
				<HeroCard />
				<ModeToggle />
			</main>
			<footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'></footer>
		</div>
	)
}
