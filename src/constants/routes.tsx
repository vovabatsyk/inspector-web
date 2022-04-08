interface IRoutes {
	HOME_PAGE: string
	ABOUT_PAGE: IAbouTInspection
	NEWS_PAGE: string
	APPEAL_FINE_PAGE: string
	CONTACTS_PAGE: string
}

interface IAbouTInspection {
	ABOUT_INSPECTION: string
	INSPECTION_SCHEDULE: string
	AREAS_SCHEDULE: string
	LEGISLATION: string
}

export const routes: IRoutes = {
	HOME_PAGE: 'page',
	ABOUT_PAGE: {
		ABOUT_INSPECTION: 'about-inspection',
		INSPECTION_SCHEDULE: 'inspection-schedule',
		AREAS_SCHEDULE: 'areas-schedule',
		LEGISLATION: 'legislation'
	},
	APPEAL_FINE_PAGE: 'appeal-fine',
	CONTACTS_PAGE: 'contacts',
	NEWS_PAGE: 'news'
}
