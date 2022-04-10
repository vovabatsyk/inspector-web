import { Layout, Row, Col, Button } from 'antd'
import React, { FC } from 'react'
import { COLORS, SIZES } from '../constants/theme'
import { CreditCardOutlined } from '@ant-design/icons'

export const PayViolation: FC = () => {
	return (
		<Layout.Content
			style={{
				backgroundColor: COLORS.containerBG,
				padding: SIZES.padding * 2,
				marginTop: SIZES.marginVertical,
				marginBottom: SIZES.marginVertical,
				borderTopWidth: 1,
				borderTopColor: COLORS.gray,
				borderTopStyle: 'solid'
			}}
		>
			<Row justify='center'>
				<Col style={{ marginRight: SIZES.margin }}>
					<CreditCardOutlined style={{ fontSize: 70 }} />
				</Col>
				<Col>
					<h2>Сплатити штраф</h2>
					<p style={{ marginBottom: SIZES.margin }}>
						Якщо ви отримали квитанцію за неправильне паркування, ви
						можете сплатити штраф онлайн
					</p>
					<Button type='primary'>Реквізити</Button>
				</Col>
			</Row>
		</Layout.Content>
	)
}
