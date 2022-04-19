import { Col, Divider, Image, Row } from 'antd'
import React from 'react'
import { LinkUri } from '../../components/ui/LinkUri'
import { MotionComponent } from '../../components/ui/MotionComponent'
import { WrapContainer } from '../../components/ui/WrapContainer'

type Props = {}

const legislation_data = [
	{
		title:
			'Закон України "Про внесення змін до деяких	законодавчих актів України щодо реформування сфери паркування транспортних засобів Документ 2262-VIII',
		link: 'https://zakon.rada.gov.ua/laws/show/2262-19#Text'
	},
	{
		title: 'КУпАП',
		link: 'https://zakon.rada.gov.ua/laws/show/80731-10#Text'
	},
	{
		title: 'Рішення Львівської міської ради 1036 від 21.09.2018',
		link: 'https://www8.city-adm.lviv.ua/Pool/Info/doclmr_1.NSF/(SearchForWeb)/6563D4486A50C250C22583120037039C?OpenDocument'
	},
	{
		title: 'Положення про управління безпеки',
		link: 'https://city-adm.lviv.ua/lmr/office/upravlinnia-bezpeky-mista'
	}
]

const decree_data = [
	{
		title: 'Частина 1 статті 122 КупАП',
		link: 'https://zakon.rada.gov.ua/laws/show/80731-10#n987'
	},
	{
		title: 'Частина 3 статті 122 КУпАП',
		link: 'https://zakon.rada.gov.ua/laws/show/80731-10#n987'
	},
	{
		title: 'Частина 1 статті 152-1 КУпАП',
		link: 'https://zakon.rada.gov.ua/laws/show/80731-10#n3599'
	},
	{
		title: 'Частина 2 статті 152-1 КУпАП',
		link: 'https://zakon.rada.gov.ua/laws/show/80731-10#n3599'
	}
]

export const Legislation = (props: Props) => {
	return (
		<MotionComponent>
			<WrapContainer>
				<Col>
					<h2>Нормативна база</h2>
					<ol>
						{legislation_data &&
							legislation_data.map((item, index) => (
								<li key={index}>
									<p style={{ marginBottom: 10, marginTop: 10 }}>
										{item.title}
									</p>
									<Divider orientation='center'>
										<LinkUri uri={item.link} />
									</Divider>
								</li>
							))}
					</ol>
				</Col>
			</WrapContainer>
			<Row justify='space-around'>
				<Col>
					<Image
						preview={false}
						src='https://jmcc.ie/wp-content/uploads/field/image/08_Legislation.png'
						width={350}
					/>
				</Col>
				<Col>
					<h2>Постанови</h2>
					<ol>
						{decree_data &&
							decree_data.map((item, index) => (
								<li key={index}>
									<p style={{ marginBottom: 10, marginTop: 10 }}>
										{item.title}
									</p>
									<Divider orientation='center'>
										<LinkUri uri={item.link} />
									</Divider>
								</li>
							))}
					</ol>
				</Col>
			</Row>
			<WrapContainer>
				<Col>
					<h2>
						Підстави звільнення від адміністративної відповідальності
					</h2>

					<p style={{ marginBottom: 10, marginTop: 10 }}>
						Звільнення відповідальної особи, за порушення правил
						зупинки, стоянки, паркування транспортних засобів,
						зафіксоване в режимі фотозйомки (відеозапису).
					</p>
					<Divider orientation='center'>
						<LinkUri uri='https://zakon.rada.gov.ua/laws/show/2262-19#n117' />
					</Divider>
				</Col>
			</WrapContainer>
		</MotionComponent>
	)
}
