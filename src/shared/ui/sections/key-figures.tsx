import Image from 'next/image'

const profiles = [
	{
		number: '01',
		name: 'Максим Шкіль',
		position: 'Бізнесмен, олігарх нового часу',
		imageSrc: '/3.jpeg',
		details: [
			{
				label: 'Неофіційно',
				description: 'Фронтмен багатомільярдних схем',
			},
			{
				label: 'Сфери',
				description:
					"Дороги, мости, метро, кар'єри, агробізнес, логістика, автосалони",
			},
			{
				label: 'Скандали',
				description:
					"Завищення вартості робіт на сотні мільйонів, Зв'язки з Партією регіонів, медіа-шантаж",
			},
			{
				label: 'Особлива прикмета',
				description:
					'Офшори на Мадейрі, paybach для піару, покупка лояльності медіа',
			},
		],
	},
	{
		number: '02',
		name: 'Андрій Рубель (ДСР)',
		position: 'Голова Департаменту стратегічних розслідувань',
		imageSrc: '/2.jpeg',
		details: [
			{
				label: 'Неофіційно',
				description: 'Тіньовий дах схем Шкіля',
			},
			{
				label: 'Посада',
				description: 'Департамент стратегічних розслідувань (ДСР)',
			},
			{
				label: 'Роль',
				description:
					'Захист від правоохоронних органів, «імунітет» для підрядів',
			},
			{
				label: 'Скандали',
				description: 'Політичне лобіювання «своїх» бізнесменів',
			},
		],
	},
	{
		number: '03',
		name: 'Роман Кравець',
		position: 'Медіа-шантажист',
		imageSrc: '/1.jpeg',
		details: [
			{
				label: 'Неофіційно',
				description: 'Куратор Telegram-каналу «Джокер»',
			},
			{
				label: 'Позиція',
				description: 'Публічний журналіст, тіньовий медіакілер',
			},
			{
				label: 'Роль',
				description: 'Вимагач',
			},
			{
				label: 'Цікаво',
				description: 'Живе з ескортницею, ховається від українського правосуддя, не їздить на Uklon, використовує Trustee',
			},
		],
	},
]

export function KeyFigures() {
	return (
		<div className='flex flex-col gap-2 px-4 justify-center items-center mb-5 relative'>
			<p className='text-sm text-center text-[#C62828] uppercase'>
				Ключові фігури
			</p>
			<h2 className='text-white text-center text-3xl md:text-[50px] font-bold w-full max-w-[580px] md:leading-17 pb-15'>
				Дійові фігури <br /> великих корупційних схем
			</h2>

			<div className='space-y-6'>
				{profiles.map(profile => (
					<ProfileCard
						key={profile.name}
						number={profile.number}
						name={profile.name}
						position={profile.position}
						details={profile.details}
						imageSrc={profile.imageSrc}
					/>
				))}
			</div>

			<div className='absolute p-2 overflow-hidden w-[329px] h-[419px] -left-95 top-110 rotate-5 rounded-4xl'>
				<Image
					fill
					src='/forbes.jpg'
					alt='forbes'
					className='opacity-20'
					style={{
						objectFit: 'cover',
						objectPosition: 'center',
						scale: '1.05',
					}}
				/>
			</div>

			<Image
				src='/joker.jpg'
				alt='joker'
				className='opacity-20 absolute -left-95 top-250 -rotate-5 rounded-4xl'
				width={329}
				height={419}
			/>

			<Image
				src='/pis.jpg'
				alt='pis'
				className='opacity-20 absolute -right-95 top-100 -rotate-5 rounded-4xl'
				width={329}
				height={419}
			/>

			<Image
				src='/rub.jpg'
				alt='rub'
				className='opacity-20 absolute -right-95 top-210 rotate-7 rounded-4xl'
				width={329}
				height={419}
			/>

			<Image
				src='/dog.jpg'
				alt='dog'
				className='opacity-20 absolute -right-95 top-320 -rotate-5 rounded-4xl'
				width={329}
				height={419}
			/>
		</div>
	)
}

interface ProfileCardProps {
	number: string
	name: string
	position: string
	details: {
		label: string
		description: string
	}[]
	imageSrc: string
}

interface ProfileCardProps {
	number: string
	name: string
	position: string
	details: {
		label: string
		description: string
	}[]
	imageSrc: string
}

export function ProfileCard({
	number,
	name,
	position,
	details,
	imageSrc,
}: ProfileCardProps) {
	return (
		<div className='rounded-3xl overflow-hidden mb-4 max-w-[600px] mx-auto'>
			<div className='relative flex flex-col'>
				<div className='text-amber-300 font-semibold absolute top-6 right-7 bg-amber-400/20 rounded-full w-10 flex justify-center items-center px-2 py-1'>
					{number}
				</div>

				<div className='flex flex-col gap-4 items-start p-6 bg-neutral-800'>
					<div className='relative w-22 h-22 rounded-full overflow-hidden mr-4'>
						<Image
							src={imageSrc || '/placeholder.svg'}
							alt={name}
							fill
							className='object-cover'
						/>
					</div>
					<div className='flex-1'>
						<h2 className='text-white text-2xl font-bold'>{name}</h2>
						<p className='text-white/50 text-lg'>{position}</p>
					</div>
				</div>

				<div className='space-y-3 bg-neutral-800/80 p-6'>
					{details.map((detail, index) => (
						<div key={index} className='flex justify-between items-start'>
							<div className='text-white font-medium w-1/3'>{detail.label}</div>
							<div className='text-white/50 text-right w-2/3'>
								{detail.description}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
