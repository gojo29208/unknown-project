// import { ThemeProvider } from '@/shared/providers/theme-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const nunito = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
	title: 'Unknown',
	description: 'Project Unknown',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${nunito.className} antialiased dark`}
				
			>
				{/* <ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				> */}
					{children}
				{/* </ThemeProvider> */}

			</body>
		</html>
	)
}
