import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

export const LayoutComponent = (props: Props) => {
  return (
    <div style={{border: 2, padding: 5, margin: 5, borderColor: '#000', borderStyle: 'dashed', width: 500, height: 500}}>
        <Outlet />
    </div>
  )
}