export type NewsItem = {
	id: number
	slug: string
	title: string
	subtitle: string
	description: string
	image: string
}

export const newsItems: NewsItem[] = [
	{
		id: 1,
		slug: 'granitnyj-start-vantazhnyk-milioner-istorija-shkilya',
		title: 'Гранітний старт: як вантажник став мільйонером',
		subtitle: 'БІЗНЕС ПО-УКРАЇНСЬКИ: ГОЛОВНЕ - АДАПТИВНІСТЬ',
		description:
			"Як за три роки Шкіль скупив кар'єри по всій Україні завдяки загадковому «німцю» і офшорам",
		image: '/carousel-1.jpeg',
	},
	{
		id: 2,
		slug: 'mist-chernihiv-7-mlrd-bilorus-proekt',
		title: 'Міст у нікуди: мегапроєкт за 7 млрд',
		subtitle: 'РЕКЕТ #1 В УКРАЇНІ',
		description:
			'Чому будується новий міст під Черніговом у бік Білорусі, коли старого вистачало?',
		image: '/carousel-2.jpeg',
	},
	{
		id: 3,
		slug: 'telegram-zachystka-shkil-pr-kampaniya-maybach',
		title: 'Медійна зачистка: Telegram-канали, Maybach і піар-кампанії',
		subtitle: 'ЛАДНО, І ТАК ЗІЙДЕ',
		description:
			'Як створюють "ідеальний образ" і зачищають критику довкола Шкіля через гроші та анонімні канали',
		image: '/carousel-3.jpeg',
	},
	{
		id: 4,
		slug: 'investytsii-2025-napryamky-ekonomika-strategii',
		title: 'Нові інвестиції: куди вкладати в 2025 році',
		subtitle: 'ФІНАНСОВІ СТРАТЕГІЇ',
		description:
			'Аналіз найперспективніших напрямків для інвестування в умовах нестабільної економіки',
		image: '/carousel-4.jpeg',
	},
]