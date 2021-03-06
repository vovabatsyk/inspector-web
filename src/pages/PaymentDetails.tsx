import { Card, Row, List, Skeleton, PageHeader } from 'antd'
import { FC } from 'react'
import { COLORS, SIZES, STYLES } from '../constants/theme'
import { PrinterOutlined } from '@ant-design/icons'
import { MotionComponent } from '../components/ui/MotionComponent'
import { useGetPaymentQuery } from '../services/PaymentService'
import { Link } from 'react-router-dom'

export const PaymentDetails: FC = () => {
  const { data: payment, isLoading } = useGetPaymentQuery(1)

  return (
    <MotionComponent>
      <PageHeader ghost={false} onBack={() => window.history.back()} title='Назад'></PageHeader>

      <Card
        title='Сплатити штраф'
        bordered={true}
        style={{
          boxShadow: STYLES.boxShadow,
          margin: SIZES.marginVertical,

          marginBottom: SIZES.marginVertical * 2,
          backgroundColor: COLORS.containerBG,
          fontSize: 10,
        }}
      >
        <Row justify='end' align='middle' style={{ marginBottom: SIZES.marginVertical }}>
          <Link
            to='/files/receipt.pdf'
            target='_blank'
            download
            style={{
              backgroundColor: COLORS.secondary,
              color: COLORS.fontColorLight,
              padding: SIZES.padding,
              fontSize: 14,
            }}
          >
            <PrinterOutlined /> Роздрукувати
          </Link>
        </Row>
        <List size='large' bordered>
          {isLoading && <Skeleton active />}
          <List.Item>Отримувач коштів - {payment?.recipient}</List.Item>
          <List.Item>Код отримувача (код за ЄДРПОУ) - {payment?.code}</List.Item>
          <List.Item>Банк отримувача - {payment?.bank}</List.Item>
          <List.Item>Номер рахунку - {payment?.account}</List.Item>
          <List.Item>Призначення платежу - {payment?.purpose}</List.Item>
          <List.Item>ДНЗ (державний номерний знак авто)</List.Item>
          <List.Item>Платник (Прізвище, ініціали)</List.Item>
          <List.Item>Сума платежу</List.Item>
        </List>
      </Card>
    </MotionComponent>
  )
}
