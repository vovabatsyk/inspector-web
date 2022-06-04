import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MotionComponent } from '../../components/ui/MotionComponent'
import { useGetPostQuery } from '../../services/PostApi'
import parse from 'html-react-parser'
import { Card, PageHeader, Row, Skeleton } from 'antd'
import moment from 'moment'
import { COLORS, SIZES } from '../../constants/theme'
import { ClockCircleOutlined } from '@ant-design/icons'
import { URL } from '../../constants/urls'

type Props = {}

const { Meta } = Card

export const DetailNews = (props: Props) => {
  const { id } = useParams()
  const { data: post, isLoading } = useGetPostQuery(id!)
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    if (post) {
      const data = parse(post.content)
      setContent(data)
    }
  }, [post])

  return (
    <MotionComponent>
      <div style={{ backgroundColor: COLORS.containerBG }}>
        <PageHeader ghost={false} onBack={() => window.history.back()} title='Назад'></PageHeader>
        <Row
          justify='center'
          align='middle'
          style={{ marginTop: SIZES.margin, marginBottom: SIZES.margin }}
        >
          {isLoading && <Skeleton active />}
          {post && (
            <Card
              hoverable
              style={{ width: '80%' }}
              cover={<img alt='example' src={`${URL.DEFAULT}/${post.image}`} />}
            >
              <Meta title={post.title} />
              <div style={{ marginTop: SIZES.margin }}>{content}</div>
              <small>
                <ClockCircleOutlined />{' '}
                {post?.createdAt ? moment(post?.createdAt).format('DD.MM.YYYY') : ''}
              </small>
            </Card>
          )}
        </Row>
      </div>
    </MotionComponent>
  )
}
