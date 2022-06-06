import { Row, Collapse, Col, Alert, message } from 'antd'
import { COLORS, SIZES } from '../constants/theme'
import { SearchViolation } from '../components/SearchViolation'
import { PayViolation } from '../components/PayViolation'
import { MotionComponent } from '../components/ui/MotionComponent'
import { FC } from 'react'
import { INotice } from '../models/INotice'
import { useGetNoticesQuery } from '../services/NoticeService'
import { useGetQuestionsQuery } from '../services/QuestionService'

type Props = {}

export const HomePage: FC = (props: Props) => {
  const { Panel } = Collapse

  const { data: notices, error } = useGetNoticesQuery(5)
  const { data: questions } = useGetQuestionsQuery(10)

  return (
    <MotionComponent>
      {/* {isLoading && message.loading('Завантаження...')} */}
      {error && message.error(error)}
      {notices !== undefined &&
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
          borderTopStyle: 'solid',
        }}
      >
        <Row>
          <h2 style={{ margin: SIZES.margin }}>Часто задавані питання</h2>
        </Row>

        <Collapse accordion>
          {questions &&
            questions.map((question, index) => (
              <Panel header={question.title} key={index}>
                <p>{question.description}</p>
              </Panel>
            ))}
        </Collapse>
      </Col>
    </MotionComponent>
  )
}
