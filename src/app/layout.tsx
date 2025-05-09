// import { ThemeProvider } from '@/shared/providers/theme-provider'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
})

export const metadata: Metadata = {
	title: 'Ляльководи епохи',
	description: 'Хто керує потоками мільярдів і медіа в Україні?',
	metadataBase: new URL('https://ms-capitall.com'),
	openGraph: {
		title: 'Ляльководи епохи',
		description: 'Хто керує потоками мільярдів і медіа в Україні?',
		url: `https://ms-capitall.com`,
		images: [
			{
				url: `/banner.jpeg`,
				width: 800,
				height: 600,
				alt: 'ms-capitall',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ляльководи епохи',
		description: 'Хто керує потоками мільярдів і медіа в Україні?',
		images: [
			{
				url: `https://ms-capitall.com`,
				alt: 'ms-capitall',
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className='!scroll-smooth' suppressHydrationWarning>
			<body
				className={`${nunito.className} dark flex flex-col items-center justify-items-center min-h-screen`}
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
