import { Layout } from 'antd'
import { FC } from 'react'
import { AppRouter } from './components/AppRouter'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { COLORS } from './constants/theme'
import { AnimatePresence } from 'framer-motion'

interface IAppProps {}

export const App: FC<IAppProps> = () => {
	return (
		<Layout>
			<Header />
			<Layout.Content style={{ backgroundColor: COLORS.white }}>
				<AnimatePresence>
					<AppRouter />
				</AnimatePresence>
			</Layout.Content>
			<Footer />
		</Layout>
	)
}
