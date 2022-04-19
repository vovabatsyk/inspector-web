import { Row, Card, Input } from 'antd'
import { FC, useState } from 'react'
import { COLORS, SIZES, STYLES } from '../constants/theme'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { ViolationModal } from './ViolationModal'

export const SearchViolation: FC = () => {
	const { Search } = Input

	const [isViolationAvailable, setViolationIsAvailable] =
		useState(false)
	const [carNumber, setCarNumber] = useState('')
	const [violationNumber, setViolationNumber] = useState('')
	const [isModalVisible, setIsModalVisible] = useState(false)

	const { getViolation } = useActions()

	const violation = useTypedSelector(state => state.violationReducer)

	const searchCarNumber = () => {
		getViolation(carNumber)
		setViolationIsAvailable(true)
	}

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
							onSearch={searchCarNumber}
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
							onSearch={() => {
								setIsModalVisible(true)
								setViolationIsAvailable(false)
							}}
						/>
					)}
				</Row>
			</Card>
			<ViolationModal
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
			/>
		</Row>
	)
}
