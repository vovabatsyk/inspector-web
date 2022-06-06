import { Card, Image, Layout, PageHeader, Row, Space, Typography, Skeleton } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SIZES } from '../constants/theme'
import { IViolation } from '../models/IViolation'
import { violationApi } from '../services/ViolationService'
import { URL } from '../constants/urls'

const { Text } = Typography

export const Violation = () => {
  const { id } = useParams()

  const { data } = violationApi.useGetViolationQuery(id!)
  const { data: images, isLoading } = violationApi.useGetViolationImagesQuery(id!)

  const [violation, setViolation] = useState<IViolation>({
    address: '',
    car_mark: '',
    car_model: '',
    car_number: '',
    date: '',
    violation_number: '',
  })

  useEffect(() => {
    if (data) {
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
                  Номер повідомлення/постанови: <Text>ЛВ {violation.violation_number}</Text>
                </Text>
                <Text type='secondary'>
                  Дата порушення: <Text>{violation.date}</Text>
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
                  Адреса: <Text>м. Львів, {violation.address}</Text>
                </Text>
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
