import { Row, Collapse, Col, Alert, message } from 'antd'
import { COLORS, SIZES } from '../constants/theme'
import { SearchViolation } from '../components/SearchViolation'
import { PayViolation } from '../components/PayViolation'
import { MotionComponent } from '../components/ui/MotionComponent'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { INotice } from '../models/INotice'
import { fetchNotices } from '../store/reducers/ActionCreators'

type Props = {}

export const HomePage: FC = (props: Props) => {
	const dispatch = useAppDispatch()
	const { notices, error } = useAppSelector(
		state => state.noticeReducer
	)

	const { Panel } = Collapse

	useEffect(() => {
		dispatch(fetchNotices())
	}, [])

	return (
		<MotionComponent>
			{/* {isLoading && message.loading('Завантаження...')} */}
			{error && message.error(error)}
			{notices.length > 1 &&
				notices.map((alert: INotice, index) =>
					alert.description ? (
						<Alert
							message={alert.title}
							description={alert.description}
							type='warning'
							closable
							key={index}
						/>
					) : null
				)}

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
						header='Де знак ?  Чому тут відсутня розмітка?'
						key='4'
					>
						<p>
							Знак 5.42.1/5.43 (Місце для стоянки / Зона стоянки) так
							як і розміщений під ним знак 7.14 (платні послуги)
							знаходиться на видному місці на початку платного
							паркувального майданчика. Розмітка 1.1 має синій колір,
							якщо нею позначаються майданчики для паркування,
							відведені на проїзній частині. Відповідно до п. 8.2
							розділу 8 ПДР дорожні знаки мають перевагу перед
							дорожньою розміткою і можуть бути постійними,
							тимчасовими та із змінною інформацією.
						</p>
					</Panel>
					<Panel header=' Чому тут платна парковка?' key='5'>
						<p>Так вирішено міською владою.</p>
						<p>
							Ухвала ЛМР № 120 від 27.01.2011 «Про затвердження збору
							за місця для паркування транспортних засобів та плати за
							паркування транспортних засобів на території м. Львова»
							Згаданою ухвалою затверджено:
						</p>
						<p>
							1.1. Ставки збору за місця для паркування транспортних
							засобів та плату за паркування транспортних засобів на
							території м. Львова (дод.1).
						</p>
						<p>
							1.2. Перелік спеціальних земельних ділянок, визначених
							для забезпечення паркування транспортних засобів із
							зазначенням місця розташування, загальної площі та
							кількості місць для паркування (дод.2).
						</p>
						<p>
							1.3. Межі зон паркування на території м.Львова для
							паркування транспортних засобів (дод.3).
						</p>
					</Panel>
					<Panel
						header=' Чому мене оштрафували? Я запізнився на 15 хвилин.'
						key='6'
					>
						<p>
							Тому, що Ви порушили вимоги ст. 152-1 КУпАП, та вимоги
							аб. 5 п.26 ПКМУ. Під неоплатою вартості послуг з
							користування майданчиком для платного паркування слід
							розуміти неоплату вартості послуг з користування
							майданчиком для платного паркування транспортних засобів
							більш як за 10 хвилин користування майданчиком для
							платного паркування транспортних засобів.
						</p>
					</Panel>
				</Collapse>
			</Col>
		</MotionComponent>
	)
}
