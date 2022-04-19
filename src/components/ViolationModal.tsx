import React, { FC, useEffect } from 'react'
import {
	Modal,
	Button,
	Space,
	Typography,
	Row,
	Image,
	Skeleton
} from 'antd'
import { WrapContainer } from './ui/WrapContainer'
import { COLORS, SIZES } from '../constants/theme'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import { Violation } from '../store/reducers/violation/types'

type Props = {
	isModalVisible: boolean
	setIsModalVisible(isClose: boolean): void
}

const inV: Violation = {
	address: '',
	car_mark: '',
	car_model: '',
	car_number: '',
	date: '',
	photos: [],
	violation_number: ''
}

export const ViolationModal: FC<Props> = ({
	isModalVisible,
	setIsModalVisible
}) => {
	const { Text } = Typography

	const { violation, error, isLoading } = useTypedSelector(
		state => state.violationReducer
	)

	const { setViolation } = useActions()

	const closeModal = () => {
		setViolation(inV)
		setIsModalVisible(false)
	}

	return (
		<Modal
			title={`Інформація про порушення № Л${violation.violation_number}`}
			visible={error ? false : isModalVisible}
			onCancel={closeModal}
			width={'90%'}
			centered
			footer={[
				<Button key='back' onClick={closeModal}>
					Закрити
				</Button>
			]}
			style={{ backgroundColor: COLORS.containerBG }}
		>
			{isLoading ? (
				<Skeleton active />
			) : (
				<>
					<WrapContainer>
						<Space direction='vertical'>
							<Text type='secondary'>
								Дата порушення: <Text>{violation.date}</Text>
							</Text>
							<Text type='secondary'>
								Марка: <Text>{violation.car_mark}</Text>
							</Text>
							<Text type='secondary'>
								Модель: <Text>{violation.car_model}</Text>
							</Text>
							<Text type='secondary'>
								Номерний знак: <Text>{violation.car_number}</Text>
							</Text>
							<Text type='secondary'>
								Адреса: <Text>м. Львів, {violation.address}</Text>
							</Text>
						</Space>
					</WrapContainer>

					<Row justify='space-around' align='middle'>
						<Image.PreviewGroup>
							{violation.photos.map((photo: string, index) => (
								<Image
									width={250}
									style={{ margin: SIZES.margin }}
									src={photo}
									key={index}
								/>
							))}
						</Image.PreviewGroup>
					</Row>
				</>
			)}
		</Modal>
	)
}
