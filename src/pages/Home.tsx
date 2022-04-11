import { Row, Collapse, Col, Form } from 'antd'
import { COLORS, SIZES } from '../constants/theme'
import { SearchViolation } from '../components/SearchViolation'
import { PayViolation } from '../components/PayViolation'
import { FC } from 'react'

type Props = {}

export const HomePage: FC = (props: Props) => {
	const { Panel } = Collapse

	return (
		<>
			<SearchViolation />
			<PayViolation />
			<Col
				style={{
					backgroundColor: COLORS.containerBG,
					marginTop: SIZES.marginVertical,
					borderTopWidth: 1,
					borderTopColor: COLORS.gray,
					borderTopStyle: 'solid'
				}}
			>
				<Row>
					<h2 style={{ margin: SIZES.margin }}>
						Часто задавані питання
					</h2>
				</Row>
				<Collapse accordion>
					<Panel
						header='Чи можу я сплачувати паркування карткою?'
						key='1'
					>
						<p>
							Так, сплатити за послуги паркування можливо за допомогою
							банківської картки та завдяки технології PayPass (через
							паркомат), а також завдяки мобільним додаткам UNIP та
							Privat24
						</p>
					</Panel>
					<Panel
						header='Що буде якщо не сплатити штраф вчасно?'
						key='2'
					>
						<p>
							У разі несплати правопорушником штрафу, постанова про
							накладення штрафу надсилається для примусового виконання
							до органу державної виконавчої служби за місцем
							проживання громадянина, роботи або за місцезнаходженням
							його майна.
						</p>
					</Panel>
					<Panel header='Яка процедура оскарження штрафу?' key='3'>
						<p>
							Вимогами Кодексу України про адміністративні
							правопорушення передбачена можливість оскарження
							постанови про адміністративне правопорушення в судовому
							порядку
						</p>
					</Panel>
					<Panel
						header='Чи можу я сплачувати паркування карткою?'
						key='4'
					>
						<p>
							Так, сплатити за послуги паркування можливо за допомогою
							банківської картки та завдяки технології PayPass (через
							паркомат), а також завдяки мобільним додаткам UNIP та
							Privat24
						</p>
					</Panel>
					<Panel
						header='Що буде якщо не сплатити штраф вчасно?'
						key='5'
					>
						<p>
							У разі несплати правопорушником штрафу, постанова про
							накладення штрафу надсилається для примусового виконання
							до органу державної виконавчої служби за місцем
							проживання громадянина, роботи або за місцезнаходженням
							його майна.
						</p>
					</Panel>
					<Panel header='Яка процедура оскарження штрафу?' key='6'>
						<p>
							Вимогами Кодексу України про адміністративні
							правопорушення передбачена можливість оскарження
							постанови про адміністративне правопорушення в судовому
							порядку
						</p>
					</Panel>
				</Collapse>
			</Col>
		</>
	)
}
