import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import { MainInfoHeader } from '../MainInfoHeader'

type Props = {}

export const MainLayout = (props: Props) => {
	return (
		<div
			style={{
				marginTop: 55
			}}
		>
			<MainInfoHeader />
			<Outlet />
			<Footer />
		</div>
	)
}
