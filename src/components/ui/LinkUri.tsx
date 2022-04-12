import React, { FC } from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { ArrowRightOutlined } from '@ant-design/icons'

type Props = {
	uri: string
}

export const LinkUri: FC<Props> = (props: Props) => {
	return (
		<a
			href={props.uri}
			target='_blank'
			rel='noreferrer'
			style={{
				backgroundColor: COLORS.secondary,
				color: COLORS.white,
				padding: SIZES.padding
			}}
		>
			Посилання на законодавчу базу <ArrowRightOutlined />
		</a>
	)
}
