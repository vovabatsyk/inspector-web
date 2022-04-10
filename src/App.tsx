import { Layout } from 'antd'
import { FC } from 'react'
import { AppRouter } from './components/AppRouter'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

interface IAppProps {}

export const App: FC<IAppProps> = () => {
	return (
		<Layout>
			<Header />
			<Layout.Content style={{ height: 1000 }}>
				<AppRouter />
			</Layout.Content>
			<Footer />
		</Layout>
	)
}
