import React from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { MainLayout } from './MainLayout'

type Props = {}

export const LayoutComponent = (props: Props) => {
	return (
		<div
			style={{
				height: 2000
			}}
		>
			<Header />
			<MainLayout />
		</div>
	)
}