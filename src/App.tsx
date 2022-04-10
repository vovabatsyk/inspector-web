import { Layout } from 'antd'
import { FC } from 'react'
import { AppRouter } from './components/AppRouter'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { COLORS } from './constants/theme'

interface IAppProps {}

export const App: FC<IAppProps> = () => {
	return (
		<Layout>
			<Header />
			<Layout.Content style={{ backgroundColor: COLORS.white }}>
				<AppRouter />
			</Layout.Content>
			<Footer />
		</Layout>
	)
}
