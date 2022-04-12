import React from 'react'
import { Card, Row, Image, Col, List } from 'antd'
import ParkingLogo from '../../assets/parking.jpg'
import { COLORS, SIZES } from '../../constants/theme'

type Props = {}

export const InspectionSchedule = (props: Props) => {
	const data = [
		'Пн–Чт: 08:00-17:00',
		'*Пт: 08:00-16:00',
		'Обідня перерва: 12:00-12:45',
		'Контактний номер телефону :',
		' - сектор контролю за дотриманням правил паркування: +38 (063) 486-64-48',
		' - сектор контролю майданчиків для платного паркування: +38 (063) 486-63-93'
	]
	return (
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
					src={ParkingLogo}
					preview={false}
					style={{ marginTop: SIZES.marginVertical, maxWidth: 520 }}
				/>
			</Col>
			<Col>
				<h2 style={{ marginTop: SIZES.marginVertical }}>
					<b>Графік роботи відділу інспекторів з паркування</b>
				</h2>

				<List
					size='small'
					bordered
					dataSource={data}
					renderItem={item => <List.Item>{item}</List.Item>}
				/>
			</Col>
		</Row>
	)
}