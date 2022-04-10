import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import DepartmentLogo from '../../assets/logo.png'
import { Image } from 'react-bootstrap'

type Props = {}

export const MainInfoHeader = (props: Props) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'row',
				padding: SIZES.padding,
				color: COLORS.white,
				backgroundColor: COLORS.primary,
				borderTopColor: COLORS.fontColorLight,
				borderTopWidth: 2
			}}
		>
			<div>
				<Image src={DepartmentLogo} width={70} />
			</div>
			<div
				style={{
					padding: SIZES.padding,
					color: COLORS.fontColorLight
				}}
			>
				<p>
					Департамент міської мобільності та вуличної інфраструктури
				</p>
				<p>Управління безпеки</p>
				<p>Львівської міської ради</p>
			</div>
		</div>
	)
}
