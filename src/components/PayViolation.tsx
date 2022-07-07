import { Col, Button } from 'antd'
import React, { FC } from 'react'
import { COLORS, SIZES } from '../constants/theme'
import { CreditCardOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { routesName } from '../routes'
import { WrapContainer } from './ui/WrapContainer'

export const PayViolation: FC = () => {
  const navigate = useNavigate()
  return (
    <WrapContainer>
      <Col style={{ marginRight: SIZES.margin }}>
        <CreditCardOutlined style={{ fontSize: 70 }} />
      </Col>
      <Col>
        <h2>Сплатити штраф</h2>
        <p style={{ marginBottom: SIZES.margin }}>
          Якщо ви отримали квитанцію за неправильне паркування, ви можете сплатити штраф онлайн
        </p>
        <Button
          type='primary'
          style={{ backgroundColor: COLORS.secondary }}
          onClick={() => {
            navigate(routesName.PAYMENT_DETAILS)
          }}
        >
          Реквізити
        </Button>
      </Col>
    </WrapContainer>
  )
}
