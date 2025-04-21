import Image from 'next/image'

export function KeyFigures() {
	return (
		<div className='flex flex-col gap-2 px-4 justify-center items-center mb-5 md:mb-30'>
			<p className='text-sm text-center text-[#C62828] uppercase'>
				Ключові фігури
			</p>
			<h2 className='text-white text-center text-3xl md:text-[50px] font-bold w-full max-w-[580px] md:leading-17 pb-15'>
				Дійові фігури <br /> великих корупційних схем
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				<div className='flex flex-col gap-2'>
					<div className='flex items-start justify-between bg-zinc-900 rounded-3xl p-6 relative'>
						<div className='flex flex-col justify-center items-start gap-4'>
							<Image
								src='/1.jpeg'
								alt='first-photo'
								width={80}
								height={80}
								className='w-20 h-20 rounded-2xl'
								style={{ objectFit: 'cover', objectPosition: 'center' }}
							/>
							<div>
								<h2 className='text-white text-2xl font-bold'>Максим Шкіль</h2>
								<p className='text-gray-400'>Бізнесмен, олігарх нового часу</p>
							</div>
						</div>
						<div className='bg-amber-700/20 text-amber-500 px-3 py-1 rounded-full text-sm whitespace-nowrap absolute right-6 top-6'>
							41 Вік
						</div>
					</div>

					<div className='flex flex-col bg-zinc-900 rounded-3xl p-6 min-h-[520px]'>
						<div>
							<h3 className='text-white text-lg mb-2'>Неофіційно</h3>
							<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full inline-block mb-2'>
								Фронтмен багатомільярдних схем
							</div>
						</div>

						<div>
							<h3 className='text-white text-lg mb-2'>Сфери</h3>
							<div className='flex flex-wrap gap-2 mb-2'>
								<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full'>
									Дороги
								</div>
								<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full'>
									Мости
								</div>
								<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full'>
									Метро
								</div>
								<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full'>
									Карʼєри
								</div>
							</div>
							<div className='flex flex-wrap gap-2 mb-2'>
								<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full'>
									Агробізнес
								</div>
								<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full'>
									Логістика
								</div>
								<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full'>
									Автосалони
								</div>
							</div>
						</div>

						<div>
							<h3 className='text-white text-lg mb-2'>Скандали</h3>
							<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full inline-block mb-2'>
								Завищення вартості робіт на сотні мільйонів
							</div>
							<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full inline-block mb-2'>
								Звʼязки з Партією регіонів, медіаманіпуляції
							</div>
						</div>

						<div>
							<h3 className='text-white text-lg mb-2'>Особлива прикмета</h3>
							<div className='flex flex-wrap gap-2 mb-2'>
								<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full'>
									Офшори на Мадейрі
								</div>
								<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full'>
									Maybach для піару
								</div>
							</div>
							<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full inline-block'>
								Покупка лояльності медіа
							</div>
						</div>
					</div>
				</div>

				<div className=' flex flex-col gap-2'>
					<div className='flex items-start justify-between bg-zinc-900 rounded-3xl p-6 relative'>
						<div className='flex flex-col justify-center items-start gap-4'>
							<Image
								src='/2.jpeg'
								alt='second-photo'
								width={80}
								height={80}
								className='w-20 h-20 rounded-2xl'
								style={{ objectFit: 'cover', objectPosition: 'center' }}
							/>
							<div>
								<h2 className='text-white text-2xl font-bold'>
									Андрій Рубель (ДСР)
								</h2>
								<p className='text-gray-400'>
									Голова Департаменту стратегічних розслідувань
								</p>
							</div>
						</div>
						<div className='bg-amber-700/20 text-amber-500 px-3 py-1 rounded-full text-sm whitespace-nowrap absolute right-6 top-6'>
							41 Вік
						</div>
					</div>

					<div className='flex flex-col bg-zinc-900 rounded-3xl p-6 min-h-[520px]'>
						<div className='mt-4'>
							<h3 className='text-white text-lg mb-2'>Неофіційно</h3>
							<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full inline-block mb-2'>
								Тіньовий дах схем Шкіля
							</div>
						</div>

						<div>
							<h3 className='text-white text-lg mb-2'>Посада</h3>
							<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full inline-block mb-2'>
								Департамент стратегічних розслідувань (ДСР)
							</div>
						</div>

						<div>
							<h3 className='text-white text-lg mb-2'>Роль</h3>
							<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full inline-block mb-2'>
								Захист від правоохоронних органів
							</div>
							<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full inline-block mb-2'>
								«імунітет» для підрядів
							</div>
						</div>

						<div>
							<h3 className='text-white text-lg mb-2'>Скандали</h3>
							<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full inline-block mb-2'>
								Політичне лобіювання «своїх» бізнесменів
							</div>
						</div>
					</div>
				</div>

				<div className='flex flex-col gap-2'>
					<div className='flex relative items-start justify-between bg-zinc-900 rounded-3xl p-6'>
						<div className='flex flex-col justify-center items-start gap-4 '>
							<Image
								src='/3.jpeg'
								alt='third-photo'
								width={80}
								height={80}
								className='w-20 h-20 rounded-2xl'
								style={{ objectFit: 'cover', objectPosition: 'center' }}
							/>
							<div>
								<h2 className='text-white text-2xl font-bold'>Роман Кравець</h2>
								<p className='text-gray-400'>Журналіст «Української правди»</p>
							</div>
						</div>
						<div className='bg-amber-700/20 text-amber-500 px-3 py-1 rounded-full text-sm whitespace-nowrap absolute right-6 top-6'>
							41 Вік
						</div>
					</div>

					<div className='flex flex-col bg-zinc-900 rounded-3xl p-6 min-h-[520px]'>
						<div>
							<h3 className='text-white text-lg mb-2'>Неофіційно</h3>
							<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full inline-block mb-2'>
								Куратор Telegram-каналу «Джокер»
							</div>
						</div>

						<div>
							<h3 className='text-white text-lg mb-2'>Позиція</h3>
							<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full inline-block mb-2'>
								Публічний журналіст, тіньовий медіакілер
							</div>
						</div>

						<div>
							<h3 className='text-white text-lg mb-2'>Роль</h3>
							<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full inline-block mb-2'>
								Атаки на конкурентів
							</div>
							<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full inline-block mb-2'>
								Просування піар-образу Шкіля
							</div>
						</div>

						<div>
							<h3 className='text-white text-lg mb-2'>Цікаво</h3>
							<div className='bg-zinc-800 text-gray-400 px-4 py-2 rounded-full inline-block mb-2'>
								Замішаний у проплачених медіакампаніях
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
