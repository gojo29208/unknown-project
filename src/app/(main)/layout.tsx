import ActiveSectionContextProvider from '@/shared/context/active-section-context'
import { Header } from '@/shared/ui/header'
import React from 'react'

type LayoutProps = {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<ActiveSectionContextProvider>
			<Header />

			<main className='relative flex flex-col space-y-8 row-start-2 items-center justify-center w-full min-[1440px]:w-360 overflow-hidden'>
				{children}
			</main>
		</ActiveSectionContextProvider>
	)
}
