import { Row, Layout } from 'antd'
import React, { FC } from 'react'
import { COLORS, SIZES } from '../../constants/theme'

export const WrapContainer: FC = ({ children }) => {
	return (
		<Layout.Content
			style={{
				backgroundColor: COLORS.containerBG,
				padding: SIZES.padding * 2,
				marginTop: SIZES.marginVertical,
				marginBottom: SIZES.marginVertical,
				borderTopWidth: 1,
				borderTopColor: COLORS.gray,
				borderTopStyle: 'solid'
			}}
		>
			<Row justify='center'>{children}</Row>
		</Layout.Content>
	)
}
