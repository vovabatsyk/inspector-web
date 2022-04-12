import { Card, Descriptions, Row } from 'antd'
import { COLORS } from '../constants/theme'
import Contact from '../assets/contact.jpg'

type Props = {}

const { Meta } = Card

export const ContactPage = (props: Props) => {
	return (
		<div style={{ backgroundColor: COLORS.containerBG }}>
			<Row justify='center'>
				<Card
					style={{ minWidth: 240, maxWidth: 620, margin: 20 }}
					cover={<img alt='Львівська міська рада' src={Contact} />}
				>
					<Meta
						title='Львівська міська рада'
						description='Департамент міської мобільності та вуличної
						інфраструктури'
					/>
					<Descriptions
						title='Управління безпеки'
						bordered
						column={{ xxl: 2, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
					>
						<Descriptions.Item label='Контакти'>
							Адреса: 79008, Львів, вул.Зелена, 9
							<br />
							Контактний номер: <br /> +38 (063) 486-64-48,
							<br /> +38 (063) 486-63-93
							<br />
							Електронна пошта: dep.secur.city@gmail.com
							<br />
						</Descriptions.Item>
						<Descriptions.Item label='Графік роботи'>
							Пн–Чт: 08:00-17:00
							<br />
							*Пт: 08:00-16:00
							<br />
							Обідня перерва: 12:00-12:45
							<br />
						</Descriptions.Item>
					</Descriptions>
				</Card>
			</Row>
		</div>
	)
}
