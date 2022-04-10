import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NewsPage } from '../pages/News'
import { DetailNews } from '../pages/News/DetailNews'
import { publicRoutes, routesName } from '../routes'

export const AppRouter = () => {
	return (
		<Routes>
			{publicRoutes.map(route => (
				<Route
					path={route.path}
					element={<route.element />}
					key={route.path}
				/>
			))}
			<Route path={routesName.NEWS_PAGE}>
				<Route index element={<NewsPage />} />
				<Route path=':id' element={<DetailNews />} />
			</Route>
			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}
