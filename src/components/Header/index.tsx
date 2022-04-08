import { Nav, NavDropdown, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { routes } from '../../constants/routes'
import { COLORS } from '../../constants/styles'

type Props = {}

export const Header = (props: Props) => {
	return (
		<Navbar
			collapseOnSelect
			expand='lg'
			variant='dark'
			fixed='top'
			style={{ backgroundColor: COLORS.primary }}
		>
			<Container>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link as={Link} to={routes.HOME_PAGE}>
							Головна
						</Nav.Link>
						<NavDropdown
							title='Про інспекцію'
							id='collasible-nav-dropdown'
						>
							<NavDropdown.Item
								as={Link}
								to={routes.ABOUT_PAGE.ABOUT_INSPECTION}
							>
								Про інспекцію
							</NavDropdown.Item>
							<NavDropdown.Item
								as={Link}
								to={routes.ABOUT_PAGE.INSPECTION_SCHEDULE}
							>
								Графік роботи інспекції
							</NavDropdown.Item>
							<NavDropdown.Item
								as={Link}
								to={routes.ABOUT_PAGE.AREAS_SCHEDULE}
							>
								Графік роботи штрафмайданчика
							</NavDropdown.Item>
							<NavDropdown.Item
								as={Link}
								to={routes.APPEAL_FINE_PAGE}
							>
								Нормативна база
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={Link} to={routes.LEGISLATION}>
							Оскаржити штраф
						</Nav.Link>
						<Nav.Link as={Link} to={routes.CONTACTS_PAGE}>
							Контакти
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link as={Link} to={routes.NEWS_PAGE}>
							Новини
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
