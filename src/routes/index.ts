import { Legislation } from './../pages/About/Legislation'
import { ContactPage } from './../pages/Contacts/index'
import { AppealFinePage } from './../pages/AppealFine'
import { InspectionSchedule } from './../pages/About/InspectionSchedule'
import { HomePage } from './../pages/Home/index'
import { ComponentType } from "react"
import { AboutInspection } from '../pages/About/AboutInspection'
import { AreasSchedule } from '../pages/About/AreasSchedule'

export interface IRoute {
    path: string
    element: ComponentType
    exact?: boolean
}

export enum routesName {
    HOME_PAGE = '/',
    ABOUT_INSPECTION = 'about-inspection',
    INSPECTION_SCHEDULE = 'inspection-schedule',
    AREAS_SCHEDULE = 'areas-schedule',
    APPEAL_FINE_PAGE = 'appeal-fine',
    CONTACTS_PAGE = 'contacts',
    NEWS_PAGE = 'news',
    LEGISLATION = 'legislation'
}

export const publicRoutes: IRoute[] = [
    { path: routesName.HOME_PAGE, element: HomePage, exact: true },
    { path: routesName.ABOUT_INSPECTION, element: AboutInspection },
    { path: routesName.INSPECTION_SCHEDULE, element: InspectionSchedule },
    { path: routesName.AREAS_SCHEDULE, element: AreasSchedule },
    { path: routesName.APPEAL_FINE_PAGE, element: AppealFinePage },
    { path: routesName.CONTACTS_PAGE, element: ContactPage },
    { path: routesName.LEGISLATION, element: Legislation },
]