import React, { FC } from 'react'
import { Modal, Button, Space, Typography, Row, Image } from 'antd'
import { WrapContainer } from './ui/WrapContainer'
import { COLORS, SIZES } from '../constants/theme'

type Props = {
	isModalVisible: boolean
	setIsModalVisible(isClose: boolean): void
}

export const ViolationModal: FC<Props> = ({
	isModalVisible,
	setIsModalVisible
}) => {
	const { Text } = Typography

	const closeModal = () => {
		setIsModalVisible(false)
	}

	return (
		<Modal
			title={`Інформація про порушення № ЛВ0000`}
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
			<WrapContainer>
				<Space direction='vertical'>
					<Text type='secondary'>
						Дата порушення: <Text>12.03.2022 10:22</Text>
					</Text>
					<Text type='secondary'>
						Марка: <Text>Audi</Text>
					</Text>
					<Text type='secondary'>
						Модель: <Text>A6</Text>
					</Text>
					<Text type='secondary'>
						Номерний знак: <Text>BC0000AM</Text>
					</Text>
					<Text type='secondary'>
						Адреса: <Text>м. Львів, пр. Свободи 20</Text>
					</Text>
				</Space>
			</WrapContainer>

			<Row justify='space-around' align='middle'>
				<Image.PreviewGroup>
					<Image
						width={250}
						style={{ margin: SIZES.margin }}
						src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*'
					/>
					<Image
						width={250}
						style={{ margin: SIZES.margin }}
						src='https://im.rediff.com/money/2017/dec/07car1.jpg'
					/>

					<Image
						width={250}
						style={{ margin: SIZES.margin }}
						src='https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/front-left-side-47.jpg'
					/>
					<Image
						width={250}
						style={{ margin: SIZES.margin }}
						src='https://mclaren.scene7.com/is/image/mclaren/McLaren_GT_Adventures_Dubai_01:crop-16x9?wid=1980&hei=1114'
					/>
				</Image.PreviewGroup>
			</Row>
		</Modal>
	)
}
