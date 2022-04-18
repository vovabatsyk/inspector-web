import { Button, Col, Image, Layout, Menu, Row } from 'antd'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { COLORS, SIZES } from '../constants/theme'
import { routesName } from '../routes'
import DepartmentLogo from '../assets/logo.png'
import { styles } from '../constants/style'
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined
} from '@ant-design/icons'

type Props = {}

export const Header: FC = (props: Props) => {
	const [visible, setVisible] = useState(false)
	return (
		<Layout style={styles.primaryBgContainer}>
			<Row
				justify='center'
				align='middle'
				style={{ marginTop: SIZES.margin }}
			>
				<Col>
					<Image src={DepartmentLogo} width={70} preview={false} />
				</Col>
				<Col
					style={{
						paddingLeft: SIZES.padding
					}}
				>
					<h3 style={{ color: COLORS.fontColorLight }}>
						Департамент міської мобільності та вуличної інфраструктури
					</h3>

					<h2 style={{ color: COLORS.fontColorLight }}>
						Управління безпеки
					</h2>

					<h3 style={{ color: COLORS.fontColorLight }}>
						Львівської міської ради
					</h3>
				</Col>
			</Row>
			<Layout.Header style={{ backgroundColor: COLORS.primary }}>
				<div className='mobile-menu'>
					<Row justify='end'>
						<Button
							type='primary'
							icon={
								visible ? (
									<MenuFoldOutlined />
								) : (
									<MenuUnfoldOutlined />
								)
							}
							size='large'
							onClick={() => setVisible(!visible)}
							style={{
								background: COLORS.fontColorLight,
								borderColor: COLORS.black
							}}
						></Button>
					</Row>
					{visible && (
						<Menu
							selectable={false}
							mode='inline'
							theme='dark'
							onClick={() => setVisible(false)}
							style={{
								width: '100vh',
								backgroundColor: COLORS.primary
							}}
						>
							<Menu.Item key={1}>
								<Link to={routesName.HOME_PAGE}>Головна</Link>
							</Menu.Item>
							<Menu.SubMenu key={2} title='Про інспекцію'>
								<Menu.Item key={21}>
									<Link to={routesName.ABOUT_INSPECTION}>
										Про інспекцію
									</Link>
								</Menu.Item>
								<Menu.Item key={22}>
									<Link to={routesName.INSPECTION_SCHEDULE}>
										Графік роботи інспекції
									</Link>
								</Menu.Item>
								<Menu.Item key={23}>
									<Link to={routesName.AREAS_SCHEDULE}>
										Графік роботи штрафмайданчика
									</Link>
								</Menu.Item>
								<Menu.Item key={24}>
									<Link to={routesName.LEGISLATION}>
										Нормативна база
									</Link>
								</Menu.Item>
							</Menu.SubMenu>
							<Menu.Item key={3}>
								<Link to={routesName.APPEAL_FINE_PAGE}>
									Оскаржити штраф
								</Link>
							</Menu.Item>
							<Menu.Item key={4}>
								<Link to={routesName.CONTACTS_PAGE}>Контакти</Link>
							</Menu.Item>
							<Menu.Item key={5}>
								<Link to={routesName.NEWS_PAGE}>Новини</Link>
							</Menu.Item>
						</Menu>
					)}
				</div>
				<Menu
					theme='dark'
					mode='horizontal'
					selectable={false}
					style={{ backgroundColor: COLORS.primary }}
					className='desktop-menu'
				>
					<Menu.Item key={1}>
						<Link to={routesName.HOME_PAGE}>Головна</Link>
					</Menu.Item>
					<Menu.SubMenu key={2} title='Про паркуваня'>
						<Menu.Item key={21}>
							<Link to={routesName.ABOUT_INSPECTION}>
								Про відділ інспекторів з паркування
							</Link>
						</Menu.Item>
						<Menu.Item key={22}>
							<Link to={routesName.INSPECTION_SCHEDULE}>
								Графік роботи відділу
							</Link>
						</Menu.Item>
						<Menu.Item key={23}>
							<Link to={routesName.AREAS_SCHEDULE}>
								Графік роботи штрафмайданчика
							</Link>
						</Menu.Item>
						<Menu.Item key={24}>
							<Link to={routesName.LEGISLATION}>Нормативна база</Link>
						</Menu.Item>
					</Menu.SubMenu>
					<Menu.Item key={3}>
						<Link to={routesName.APPEAL_FINE_PAGE}>
							Оскаржити штраф
						</Link>
					</Menu.Item>
					<Menu.Item key={4}>
						<Link to={routesName.CONTACTS_PAGE}>Контакти</Link>
					</Menu.Item>
					<Menu.Item key={5}>
						<Link to={routesName.NEWS_PAGE}>Новини</Link>
					</Menu.Item>
				</Menu>
			</Layout.Header>
		</Layout>
	)
}
