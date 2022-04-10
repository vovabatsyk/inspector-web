import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'

type Props = {}

export const MainLayout = (props: Props) => {
	return (
		<div
			style={{
				marginTop: 195
			}}
		>
			<Outlet />
			<Footer />
		</div>
	)
}
