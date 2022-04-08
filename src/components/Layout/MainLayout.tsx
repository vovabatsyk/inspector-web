import { Outlet } from 'react-router-dom'

type Props = {}

export const MainLayout = (props: Props) => {
	return (
		<div style={{ marginTop: 55, backgroundColor: 'grey' }}>
			<Outlet />
		</div>
	)
}
