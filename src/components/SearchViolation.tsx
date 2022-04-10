import { Row, Card, Form, Input, Button } from 'antd'
import { FC, useState } from 'react'
import { COLORS, SIZES, STYLES } from '../constants/theme'
import { SearchOutlined } from '@ant-design/icons'

const { Search } = Input

export const SearchViolation: FC = () => {
	const [isViolationAvailable, setViolationIsAvailable] =
		useState(false)
	const [carNumber, setCarNumber] = useState('')
	const [violationNumber, setViolationNumber] = useState('')

	return (
		<Row
			justify='center'
			style={{
				marginTop: SIZES.marginVertical
			}}
		>
			<Card
				title='Перевірити наявність правопорушень'
				bordered={true}
				style={{
					boxShadow: STYLES.boxShadow,
					margin: SIZES.margin,
					backgroundColor: COLORS.containerBG
				}}
			>
				<Row justify='center'>
					<p>
						Введіть номер, щоб перевірити інформацію про штрафи, або
						з’ясувати чи ваша машина на штрафмайданчику
					</p>
				</Row>

				<Row justify='center' style={{ marginTop: SIZES.margin }}>
					{!isViolationAvailable ? (
						<Search
							addonBefore='ДНЗ'
							placeholder='номерний знак'
							allowClear
							onSearch={() => setViolationIsAvailable(true)}
							style={{ maxWidth: 304 }}
							value={carNumber}
							onChange={e => setCarNumber(e.target.value)}
							required={true}
						/>
					) : (
						<Search
							addonBefore='ЛВ'
							placeholder='номер повідомлення'
							type='number'
							allowClear
							value={violationNumber}
							style={{ maxWidth: 304 }}
							onChange={e => setViolationNumber(e.target.value)}
							onSearch={() => setViolationIsAvailable(false)}
						/>
					)}
				</Row>
			</Card>
		</Row>
	)
}
