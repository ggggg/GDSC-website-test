import { useEffect } from 'react';

import {
  Container,
  Typography,
} from '@mui/material';

import BannerImg from '../../assets/webiste_proprietary/heroes/IMG_1045.png';
import {
  ErrorBoundary,
  EventList,
  HeroHeader,
} from '../../components';

/**
 * @return {JSX.Element} Events page component using EventList
 */
const Events = () => {
	useEffect(() => {
		document.title = "GDSC UTM - Events";
	}, []);
	return (
		<>
			<HeroHeader text="Events" picture={BannerImg} position="bottom" />

			<Container sx={{ py: 4 }} component="main" id="events">
				<section>
					<Typography
						color="text.primary"
						component="h2"
						fontWeight="bold"
						lineHeight="2.5em"
						variant="h4"
					>
						Upcoming Events
					</Typography>
					<ErrorBoundary>
						<EventList from={new Date()} />
					</ErrorBoundary>
				</section>
				<section>
					<Typography
						color="text.primary"
						component="h2"
						fontWeight="bold"
						lineHeight="2.5em"
						variant="h4"
					>
						Past Events
					</Typography>
					<ErrorBoundary>
						<EventList to={new Date()}/>
					</ErrorBoundary>
				</section>
			</Container>
		</>
	);
}

export default Events;
