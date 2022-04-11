import { Table, Card, Button, Row } from 'antd'
import { FC } from 'react'
import { COLORS, SIZES, STYLES } from '../constants/theme'
import { PrinterOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const columns = [
	{
		title: 'Реквізити',
		dataIndex: 'name'
	},
	{
		title: '-',
		dataIndex: 'desc'
	}
]
const data = [
	{
		key: '1',
		name: 'Отримувач коштів',
		desc: 'ГУК Львiв/Львівська тг/21081100'
	},
	{
		key: '2',
		name: 'Код отримувача (код за ЄДРПОУ)',
		desc: '38008294'
	},
	{
		key: '3',
		name: 'Банк отримувача',
		desc: 'Казначейство України (ЕАП)'
	},
	{
		key: '4',
		name: 'Номер рахунку',
		desc: 'UA638999980314060542000013933'
	},
	{
		key: '5',
		name: 'Призначення платежу',
		desc: 'Обов’язково вказати серію та номер повідомлення або постанови'
	},
	{
		key: '6',
		name: 'ДНЗ (державний номерний знак авто)',
		desc: '__________________________________'
	},
	{
		key: '7',
		name: 'Платник (Прізвище, ініціали)',
		desc: '__________________________________'
	},
	{
		key: '8',
		name: 'Сума платежу',
		desc: '__________________________________'
	}
]

export const PaymentDetails: FC = () => {
	return (
		<Card
			title='Сплатити штраф'
			bordered={true}
			style={{
				boxShadow: STYLES.boxShadow,
				margin: SIZES.marginVertical,
				marginTop: SIZES.marginVertical * 2,
				marginBottom: SIZES.marginVertical * 2,
				backgroundColor: COLORS.containerBG,
				fontSize: 10
			}}
		>
			<Row
				justify='end'
				align='middle'
				style={{ marginBottom: SIZES.marginVertical }}
			>
				<Link
					to='/files/receipt.pdf'
					target='_blank'
					download
					style={{
						backgroundColor: COLORS.secondary,
						color: COLORS.fontColorLight,
						padding: SIZES.padding,
						fontSize: 14
					}}
				>
					<PrinterOutlined />
					Роздрукувати
				</Link>
			</Row>
			<Table
				columns={columns}
				dataSource={data}
				size='small'
				pagination={false}
				style={{ fontSize: 5 }}
			/>
		</Card>
	)
}
