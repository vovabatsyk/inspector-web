import { Card, Row, Skeleton } from 'antd'
import React, { FC } from 'react'
import { MotionComponent } from '../../components/ui/MotionComponent'
import { COLORS, SIZES } from '../../constants/theme'
import { URL } from '../../url'
import { useGetPostsQuery } from '../../services/PostApi'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

type Props = {}

export const NewsPage: FC = (props: Props) => {
  const { Meta } = Card
  const { data: posts, isLoading } = useGetPostsQuery(2)
  const navigate = useNavigate()

  return (
    <MotionComponent>
      <Card title='Новини' style={{ backgroundColor: COLORS.containerBG }}>
        <Row justify='space-around'>
          {isLoading && <Skeleton active />}
          {posts &&
            [...posts].reverse().map((post, idx) => (
              <Card
                key={idx}
                hoverable
                onClick={() => navigate(`../${post.id}`)}
                style={{ width: 300, margin: SIZES.margin }}
                cover={<img alt={post.title} src={`${URL.DEFAULT}/${post.image}`} />}
              >
                <Meta
                  title={post.title}
                  description={moment(post.createdAt).utcOffset('+0300').format('DD.MM.YYYY HH:mm')}
                />
              </Card>
            ))}
        </Row>
      </Card>
    </MotionComponent>
  )
}
