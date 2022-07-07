import { Card, Image, Layout, PageHeader, Row, Space, Typography, Skeleton } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SIZES } from '../constants/theme'
import { IViolation } from '../models/IViolation'
import { violationApi } from '../services/ViolationService'
import moment from 'moment'
import { URL } from '../url'

const { Text } = Typography

export const Violation = () => {
  const { id } = useParams()
  const [unipId, setUnipId] = useState(0)

  const { data } = violationApi.useGetViolationQuery(id!)
  const { data: images, isLoading } = violationApi.useGetViolationImagesQuery(id!)
  const { data: unipImages, isLoading: isUnipLoading } =
    violationApi.useGetViolationImagesUnipQuery(unipId)

  const { data: unipPayment, isLoading: isUnipPaymentLoading } =
    violationApi.useGetViolationPaymentUnipQuery(unipId)

  const [violation, setViolation] = useState<IViolation>({
    address: '',
    car_mark: '',
    car_model: '',
    car_number: '',
    date: '',
    violation_number: '',
    unip_id: 0,
  })

  useEffect(() => {
    if (data) {
      setUnipId(data.unip_id)
      setViolation(data)
    }
  }, [data])

  return (
    <Layout>
      <PageHeader ghost={false} onBack={() => window.history.back()} title='Назад'></PageHeader>
      <Layout.Content style={{ padding: SIZES.padding }} className='h100'>
        <Row justify='center' align='middle'>
          <Card title='Правопорушення' style={{ width: '90%' }}>
            <>
              <Space direction='vertical'>
                <Text type='secondary'>
                  Номер повідомлення/постанови: <Text>{violation.violation_number}</Text>
                </Text>
                <Text type='secondary'>
                  Дата порушення:{' '}
                  <Text>
                    {moment(violation.date).format('DD.MM.YYYY') === 'Invalid date'
                      ? violation.date
                      : moment(violation.date).format('DD.MM.YYYY')}
                  </Text>
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
                  Адреса: <Text>{violation.address}</Text>
                </Text>
                {/* {isUnipLoading && <Skeleton active />} */}
                {unipPayment && (
                  <>
                    <Text type='secondary'>
                      До оплати: <Text>{unipPayment.FineAmount} грн.</Text>
                    </Text>
                    <Text type='secondary'>
                      Статус: <Text>{unipPayment.PaymentState}</Text>
                    </Text>
                    <Text type='secondary'>
                      Оплачено:{' '}
                      <Text>
                        {unipPayment.PayedAmount === null ? '0' : unipPayment.PayedAmount} грн.
                      </Text>
                    </Text>
                  </>
                )}
              </Space>
              <Row justify='space-around' align='middle'>
                <Image.PreviewGroup>
                  <>
                    {isLoading && <Skeleton active />}
                    {images &&
                      images.map((photo, index) => (
                        <Image
                          key={index}
                          width={250}
                          style={{ margin: SIZES.margin }}
                          src={`${URL.DEFAULT}/${photo.image}`}
                        />
                      ))}
                    {isUnipLoading && <Skeleton active />}
                    {unipImages !== null &&
                      unipImages &&
                      unipImages.map((photo, index) => (
                        <Image
                          key={index}
                          width={250}
                          style={{ margin: SIZES.margin }}
                          src={`data:image/png;base64, ${photo.PreviewBase64}`}
                        />
                      ))}
                  </>
                </Image.PreviewGroup>
              </Row>
            </>
          </Card>
        </Row>
      </Layout.Content>
    </Layout>
  )
}
