import { Col, Image, List, Row } from 'antd'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import ParkingEvaLogo from '../../assets/parking-eva.jpg'

type Props = {}

export const AreasSchedule = (props: Props) => {
	const data = [
		'Адреса: вул. Конюшинна 13',
		' - графік роботи: цілодобово',
		'Адреса: вул. Тролейбусна 1',
		' - графік роботи: цілодобово'
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
	)
}
