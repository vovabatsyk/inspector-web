import { Col, Divider, Image, List, Row } from 'antd'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import ParkingEvaLogo from '../../assets/parking-eva.jpg'
import { MotionComponent } from '../../components/ui/MotionComponent'
import { LinkUri } from '../../components/ui/LinkUri'

type Props = {}

export const AreasSchedule = (props: Props) => {
	const data = [
		'Адреса: вул. Конюшинна 13',
		' - графік роботи: цілодобово',
		'Адреса: вул. Тролейбусна 1',
		' - графік роботи: цілодобово'
	]

	const eva_data = [
		{
			title:
				'Підстави Тимчасового затримання транспортних засобів інспекторами з паркування.',
			link: ''
		},
		{
			title: 'Порядок евакуації та вартість зберігання.',
			link: ''
		}
	]
	return (
		<MotionComponent>
			<Row
				justify='space-around'
				align='middle'
				style={{
					margin: SIZES.margin,
					backgroundColor: COLORS.containerBG
				}}
			>
				<Col>
					<Image
						src={ParkingEvaLogo}
						preview={false}
						style={{ marginTop: SIZES.marginVertical, maxWidth: 520 }}
					/>
				</Col>
				<Col>
					<h2 style={{ marginTop: SIZES.marginVertical }}>
						<b>Графік роботи штрафмайданчиків</b>
					</h2>

					<List
						size='small'
						bordered={false}
						dataSource={data}
						renderItem={item => <List.Item>{item}</List.Item>}
						style={{ width: 320 }}
					/>
				</Col>
			</Row>

			<Row justify='space-around'>
				<Col>
					<h2 style={{ margin: SIZES.margin }}>
						Порядок евакуації та зберігання
					</h2>
					<ol>
						{eva_data &&
							eva_data.map((item, index) => (
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
		</MotionComponent>
	)
}
