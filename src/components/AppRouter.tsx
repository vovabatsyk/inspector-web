import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { NewsPage } from '../pages/News'
import { DetailNews } from '../pages/News/DetailNews'
import { publicRoutes, routesName } from '../routes'
import { AnimatePresence } from 'framer-motion'
import { Violation } from '../pages/Violation'

export const AppRouter = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {publicRoutes.map((route) => (
          <Route path={route.path} element={<route.element />} key={route.path} />
        ))}
        <Route path={routesName.NEWS_PAGE}>
          <Route index element={<NewsPage />} />
          <Route path=':id' element={<DetailNews />} />
        </Route>
        <Route path='violation/:id' element={<Violation />} />

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </AnimatePresence>
  )
}
