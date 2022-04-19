import React, { FC } from 'react'
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
import { IViolation } from '../models/IViolation'

type Props = {
	isModalVisible: boolean
	setIsModalVisible(isClose: boolean): void
	violation: IViolation
	isLoading: boolean
}

export const ViolationModal: FC<Props> = ({
	isModalVisible,
	setIsModalVisible,
	violation,
	isLoading
}) => {
	const { Text } = Typography

	const closeModal = () => {
		setIsModalVisible(false)
	}

	return (
		<Modal
			title='Інформація про порушення'
			visible={isModalVisible}
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
			{isLoading && <Skeleton active />}
			{violation && (
				<>
					<WrapContainer>
						<Space direction='vertical'>
							<Text type='secondary'>
								Номер повідомлення/постанови:{' '}
								<Text>ЛВ {violation.violation_number}</Text>
							</Text>
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
							{violation.photos &&
								violation.photos.map((photo: string, index) => (
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
