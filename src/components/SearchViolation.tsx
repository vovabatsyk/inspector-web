import { Row, Card, Input, Form, Button, InputNumber } from 'antd'
import { FC, useEffect, useState } from 'react'
import { COLORS, SIZES, STYLES } from '../constants/theme'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { ViolationModal } from './ViolationModal'
import {
	AuditOutlined,
	CarOutlined,
	FileSearchOutlined
} from '@ant-design/icons'

export const SearchViolation: FC = () => {
	const { Search } = Input

	const [isViolationAvailable, setViolationIsAvailable] =
		useState(false)
	const [carNumber, setCarNumber] = useState('')
	const [violationNumber, setViolationNumber] = useState('')
	const [isModalVisible, setIsModalVisible] = useState(false)

	const { getViolation } = useActions()
	const { error } = useTypedSelector(state => state.violationReducer)

	const searchCarNumber = async () => {
		await getViolation(carNumber)

		console.log('error', error)

		setViolationIsAvailable(true)
		setCarNumber('')
	}

	// useEffect(() => {
	// 	getViolation(carNumber)
	// }, [carNumber])

	const [form] = Form.useForm()
	const [, forceUpdate] = useState({})

	useEffect(() => {
		forceUpdate({})
	}, [])

	const onFinish = (values: any) => {
		console.log('Finish:', values)
		getViolation(values.carNumber)
		console.log('error', error)

		setIsModalVisible(true)
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
							name='carNumber'
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
							/>
						</Form.Item>
						<Form.Item
							name='vioLationNumber'
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
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
			/>
		</Row>
	)
}
