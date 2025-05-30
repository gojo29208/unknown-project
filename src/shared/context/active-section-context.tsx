'use client'

import type { SectionName } from '@/shared/lib/types'
import React, { createContext, useContext, useState } from 'react'

type ActiveSectionContextProviderProps = {
	children: React.ReactNode
}

type ActiveSectionContextType = {
	activeSection: SectionName
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
	timeOfLastClick: number
	setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext =
	createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({
	children,
}: ActiveSectionContextProviderProps) {
	const [activeSection, setActiveSection] = useState<SectionName>('Головна')
	const [timeOfLastClick, setTimeOfLastClick] = useState(0) // we need to keep track of this to disable the observer temporarily when user clicks on a link

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeOfLastClick,
				setTimeOfLastClick,
			}}
		>
			{children}
		</ActiveSectionContext.Provider>
	)
}

export function useActiveSectionContext() {
	const context = useContext(ActiveSectionContext)

	if (context === null) {
		throw new Error(
			'useActiveSectionContext must be used within an ActiveSectionContextProvider'
		)
	}

	return context
}
