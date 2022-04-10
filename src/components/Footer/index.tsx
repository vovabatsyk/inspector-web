import { Col, Layout, Row, Image, Button } from 'antd'
import { SIZES } from '../../constants/theme'
import { routesName } from '../../routes'
import { Link, useNavigate } from 'react-router-dom'
import DepartmentLogo from '../../assets/logo.png'
import LMRLogo from '../../assets/lmr_logo.png'
import { styles } from '../../constants/style'

type Props = {}

export const Footer = (props: Props) => {
	return (
		<Layout.Footer style={styles.primaryBgContainer}>
			<Row justify='space-between'>
				<Col style={{ padding: SIZES.padding }}>
					<Row justify='center'>
						<Col style={{ paddingRight: SIZES.padding }}>
							<Image
								src={DepartmentLogo}
								width={70}
								preview={false}
							/>
						</Col>
						<Col>
							<p>
								Департамент міської мобільності та вуличної
								інфраструктури
							</p>
							<p>Управління безпеки Львівської міської ради</p>
							<p>
								<small>Адреса: вул. Зелена 9</small>
							</p>
							<p>
								<small>Телефон: (068) 000-00-00</small>
							</p>
							<p>
								<small>
									Електронна пошта: parkingcontrol@gmail.com
								</small>
							</p>
						</Col>
					</Row>
				</Col>
				<Col style={{ padding: SIZES.padding }}>
					<Image src={LMRLogo} height={70} preview={false} />
				</Col>
				<Col style={{ padding: SIZES.padding }}>
					<Row justify='start'>
						<Link
							to={routesName.ABOUT_INSPECTION}
							style={styles.primaryLink}
							onClick={() =>
								window.scrollTo({ behavior: 'smooth', top: 0 })
							}
						>
							Про інспекцію
						</Link>
					</Row>
					<Row>
						<Link
							to={routesName.INSPECTION_SCHEDULE}
							style={styles.primaryLink}
							onClick={() =>
								window.scrollTo({ behavior: 'smooth', top: 0 })
							}
						>
							Графік роботи інспекції
						</Link>
					</Row>
					<Row>
						<Link
							to={routesName.AREAS_SCHEDULE}
							style={styles.primaryLink}
							onClick={() =>
								window.scrollTo({ behavior: 'smooth', top: 0 })
							}
						>
							Графік роботи штрафмайданчика
						</Link>
					</Row>
					<Row>
						<Link
							to={routesName.LEGISLATION}
							style={styles.primaryLink}
							onClick={() =>
								window.scrollTo({ behavior: 'smooth', top: 0 })
							}
						>
							Нормативна база
						</Link>
					</Row>
				</Col>
			</Row>
		</Layout.Footer>
	)
}
