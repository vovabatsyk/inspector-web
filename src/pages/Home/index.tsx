import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../constants/routes'

type Props = {}

export const HomePage = (props: Props) => {
	const navigate = useNavigate()
	return (
		<Container>
			<h2>HomeComponent</h2>
			<Button
				variant='success'
				onClick={() => navigate(routes.ABOUT_PAGE.ABOUT_INSPECTION)}
			>
				to about inspection
			</Button>
		</Container>
	)
}
