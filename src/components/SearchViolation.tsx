import { Row, Card, Input, Form, Button, notification } from 'antd'
import { FC, useEffect, useState } from 'react'
import { COLORS, SIZES, STYLES } from '../constants/theme'
import { ViolationModal } from './ViolationModal'
import {
	AuditOutlined,
	CarOutlined,
	FileSearchOutlined
} from '@ant-design/icons'
import { violationApi } from '../services/ViolationService'
import { IViolation } from '../models/IViolation'

export const SearchViolation: FC = () => {
	const { data: violations, isLoading } =
		violationApi.useFetchAllViolationsQuery(10)

	const [isModalVisible, setIsModalVisible] = useState(false)

	const [violation, setViolation] = useState({} as IViolation)
	const [carNumber, setCarNumber] = useState('')
	const [violationNumber, setViolationNumber] = useState('')

	const [form] = Form.useForm()
	const [, forceUpdate] = useState({})

	useEffect(() => {
		forceUpdate({})
	}, [])

	const onFinish = () => {
		if (violations !== undefined) {
			const founded = violations.find(
				(v: IViolation) =>
					v.car_number === carNumber &&
					v.violation_number === violationNumber
			)

			if (founded) {
				setViolation(founded)
				setIsModalVisible(true)
			} else {
				notification['error']({
					message: 'Перевірити авто не вдалося!',
					description:
						'Перевірте чи правильно введений номерний знак авто та номер повідомлення/постанови.',
					duration: 10
				})
			}
		}
		setCarNumber('')
		setViolationNumber('')
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
					<Form
						form={form}
						name='horizontal_search'
						layout='inline'
						onFinish={onFinish}
					>
						<Form.Item
							rules={[
								{
									required: true,
									message: 'Введіть номерний знак авто!'
								}
							]}
						>
							<Input
								prefix={
									<CarOutlined className='site-form-item-icon' />
								}
								placeholder='номерний знак авто'
								value={carNumber}
								onChange={e =>
									setCarNumber(e.target.value.toUpperCase())
								}
							/>
						</Form.Item>
						<Form.Item
							rules={[
								{
									required: true,
									message: 'Введіть номер повідомлення/постанови!'
								}
							]}
						>
							<Input
								prefix={
									<AuditOutlined className='site-form-item-icon' />
								}
								placeholder='номер повідомлення/постанови'
								type='number'
								min={0}
								value={violationNumber}
								onChange={e => setViolationNumber(e.target.value)}
							/>
						</Form.Item>
						<Form.Item shouldUpdate>
							{() => (
								<Button
									type='primary'
									htmlType='submit'
									disabled={
										!form.isFieldsTouched(true) ||
										!!form
											.getFieldsError()
											.filter(({ errors }) => errors.length).length
									}
								>
									<FileSearchOutlined />
								</Button>
							)}
						</Form.Item>
					</Form>

					{/* {!isViolationAvailable ? (
						<Search
							addonBefore='ДНЗ'
							placeholder='номерний знак'
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
							value={violationNumber}
							style={{ maxWidth: 304 }}
							onChange={e => setViolationNumber(e.target.value)}
							onSearch={() => {
								setIsModalVisible(true)
								setViolationIsAvailable(false)
								setViolationNumber('')
							}}
						/>
					)} */}
				</Row>
			</Card>
			<ViolationModal
				violation={violation}
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
				isLoading={isLoading}
			/>
		</Row>
	)
}
