import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LayoutComponent } from './components/Layout'
import { routes } from './constants/routes'
import { AboutInspection } from './pages/About/AboutInspection'
import { AreasSchedule } from './pages/About/AreasSchedule'
import { InspectionSchedule } from './pages/About/InspectionSchedule'
import { Legislation } from './pages/About/Legislation'
import { AppealFinePage } from './pages/AppealFine'
import { ContactPage } from './pages/Contacts'
import { HomePage } from './pages/Home'
import { NewsPage } from './pages/News'
import { DetailNews } from './pages/News/DetailNews'

interface IAppProps {}

export const App: FC<IAppProps> = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LayoutComponent />}>
					<Route index element={<HomePage />} />
					<Route
						path={routes.ABOUT_PAGE.ABOUT_INSPECTION}
						element={<AboutInspection />}
					/>
					<Route
						path={routes.ABOUT_PAGE.INSPECTION_SCHEDULE}
						element={<InspectionSchedule />}
					/>
					<Route
						path={routes.ABOUT_PAGE.AREAS_SCHEDULE}
						element={<AreasSchedule />}
					/>

					<Route
						path={routes.LEGISLATION}
						element={<Legislation />}
					/>

					<Route path={routes.NEWS_PAGE}>
						<Route index element={<NewsPage />} />
						<Route path=':id' element={<DetailNews />} />
					</Route>

					<Route
						path={routes.APPEAL_FINE_PAGE}
						element={<AppealFinePage />}
					/>
					<Route
						path={routes.CONTACTS_PAGE}
						element={<ContactPage />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
