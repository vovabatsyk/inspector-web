import { Col, Image, Layout, List, Row, Divider } from 'antd'
import React, { FC } from 'react'
import { WrapContainer } from '../../components/ui/WrapContainer'
import LMR from '../../assets/lmr.jpg'
import { SIZES } from '../../constants/theme'
import { LinkUri } from '../../components/ui/LinkUri'
import Parking from '../../assets/parking.jpg'
import ParkingEva from '../../assets/parking-eva.jpg'

type Props = {}
const data = [
	'Загальні положення',
	'Основні завдання',
	'Структура та організація роботи',
	'Компетенція управління',
	'Права управління',
	'Фінансування та матеріально-технічне забезпечення діяльності управління',
	'Відповідальність посадових осіб управління',
	'Заключні положення'
]

export const AboutInspection: FC = (props: Props) => {
	return (
		<Layout.Content>
			<WrapContainer>
				<Col>
					<Row justify='center'>
						<h3>
							Департамент міської мобільності та вуличної
							інфраструктури
						</h3>
					</Row>
					<Row justify='center'>
						<h2>Управління безпеки</h2>
					</Row>
					<Row justify='center'>
						<h3>Львівської міської ради</h3>
					</Row>
				</Col>
			</WrapContainer>
			<Row justify='space-around'>
				<Col style={{ margin: SIZES.margin }}>
					<Image
						src={LMR}
						preview={false}
						style={{ maxWidth: 600, marginTop: SIZES.marginVertical }}
					/>
				</Col>
				<Col style={{ margin: SIZES.margin }}>
					<Divider orientation='left'>
						Положення про управління безпеки
					</Divider>
					<List
						size='small'
						bordered
						dataSource={data}
						renderItem={(item, idx) => (
							<List.Item>
								{idx + 1}. {item}
							</List.Item>
						)}
					/>
					<Divider orientation='left'>
						<LinkUri uri='https://city-adm.lviv.ua/lmr/office/upravlinnia-bezpeky-mista' />
					</Divider>
				</Col>
			</Row>
			<Row justify='space-around'>
				<Image src={Parking} preview={false} height={250} />
				<Image src={ParkingEva} preview={false} height={250} />
			</Row>
			<WrapContainer>
				<h1>Інспектор з паркування</h1>
				<p style={{ textAlign: 'justify' }}>
					<b>Інспектор з паркування</b> - це посадова особа, яка
					працює в органах місцевого самоврядування, має відповідні
					посадові повноваження щодо здійснення
					організаційно-розпорядчих та консультативно-дорадчих функцій
					і отримує заробітну плату за рахунок місцевого бюджету, і
					якій надано право розглядати справи про адміністративні
					правопорушення, передбачені частинами першою і третьою
					статті 122, частинами першою і другою статті 152-1 КУпАП.
				</p>
				<LinkUri uri='https://zakon.rada.gov.ua/laws/show/2262-19#n45' />
			</WrapContainer>
		</Layout.Content>
	)
}
