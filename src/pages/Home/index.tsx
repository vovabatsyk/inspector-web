import React from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../constants/routes'
import { Button } from 'antd'

type Props = {}

export const HomePage = (props: Props) => {
	const navigate = useNavigate()
	return (
		<div style={{ zIndex: 1 }}>
			<h2>HomeComponent</h2>
			<Button
				type='primary'
				onClick={() => navigate(routes.ABOUT_PAGE.ABOUT_INSPECTION)}
			>
				to about inspection
			</Button>
		</div>
	)
}
