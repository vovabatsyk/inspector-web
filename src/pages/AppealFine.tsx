import React, { FC } from 'react'
import { Row, Col, Image } from 'antd'
import { SIZES } from '../constants/theme'
import { WrapContainer } from '../components/ui/WrapContainer'
import { Link } from 'react-router-dom'
import { MotionComponent } from '../components/ui/MotionComponent'

export const AppealFinePage: FC = () => {
  return (
    <MotionComponent>
      <Row
        style={{
          padding: SIZES.padding,
          textAlign: 'justify',
        }}
        justify='center'
      >
        <Col span={22}>
          <Row justify='space-around' align='middle'>
            <Image
              preview={false}
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETSsYbvk68jLmSw5XiX_STJjq8PgNZG-M2Q&usqp=CAU'
              width={170}
            />
            <h2>
              <b>Яка процедура оскарження штрафу?</b>
            </h2>
          </Row>
          <p style={{ fontSize: '16px' }}>
            Вимогами Кодексу України про адміністративні правопорушення передбачена можливість
            оскарження постанови про адміністративне правопорушення в судовому порядку.
          </p>
          <p style={{ fontSize: '16px' }}>
            <b>Стаття 300-1.</b> Порядок виконання постанови про накладення адміністративного
            стягнення у вигляді штрафу за правопорушення у сфері забезпечення безпеки дорожнього
            руху, зафіксоване в автоматичному режимі, або про порушення правил зупинки, стоянки,
            паркування транспортних засобів, зафіксоване в режимі фотозйомки (відеозапису). У разі
            сплати відповідальною особою, зазначеною у частині першій статті 14-2 цього Кодексу, або
            громадянином (резидентом) України, який ввіз на територію України транспортний засіб,
            зареєстрований за межами України, 50 відсотків розміру штрафу за постановою про
            накладення адміністративного стягнення за правопорушення у сфері забезпечення безпеки
            дорожнього руху, зафіксоване в автоматичному режимі, або за порушення правил зупинки,
            стоянки, паркування транспортних засобів, зафіксоване в режимі фотозйомки (відеозапису),
            до вручення такої постанови або отримання поштового повідомлення про вручення або про
            відмову в її отриманні, або повернення поштового відправлення з позначкою про
            невручення, або протягом десяти днів з дня набрання постановою законної сили така
            постанова вважається виконаною. Постанова про накладення адміністративного стягнення за
            порушення зупинки, стоянки та паркування транспортних засобів, зафіксоване в режимі
            фотозйомки (відеозапису), також вважається виконаною у разі сплати штрафу за
            повідомленням про притягнення до адміністративної відповідальності, залишеним
            уповноваженою посадовою особою на місці вчинення правопорушення на лобовому склі
            транспортного засобу, у тому числі шляхом сплати 50 відсотків розміру штрафу протягом
            десяти днів з дня вчинення відповідного правопорушення. У разі несплати штрафу особами,
            зазначеними у частині першій цієї статті, протягом 30 днів з дня набрання законної сили
            постановою про накладення адміністративного стягнення за правопорушення у сферах безпеки
            дорожнього руху та паркування транспортних засобів така постанова підлягає примусовому
            виконанню.
          </p>
        </Col>
      </Row>
      <WrapContainer>
        <Col span={22}>
          <h3>Зразок заяв:</h3>

          <ol>
            <li>
              <Link to='/files/1.docx' target='_blank' download>
                Заява на оскарження штрафу у зв'язку з наявністю пільг
              </Link>
            </li>
            <li>
              <Link to='/files/2.docx' target='_blank' download>
                Заява на оскарження штрафу у зв'язку з оплатою паркування
              </Link>
            </li>
            <li>
              <Link to='/files/3.doc' target='_blank' download>
                Згода на притягнення до адміністративної відповідальності
              </Link>
            </li>
          </ol>
        </Col>
      </WrapContainer>
    </MotionComponent>
  )
}
