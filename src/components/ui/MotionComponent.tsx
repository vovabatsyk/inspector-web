import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { Layout } from 'antd'

export const MotionComponent: FC = ({ children }) => {
	return (
		<Layout.Content>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				{children}
			</motion.div>
		</Layout.Content>
	)
}
