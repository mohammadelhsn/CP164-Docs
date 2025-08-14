/** ======= MUI COMPONENTS ======= */
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

/** ======= MUI ICONS ======= */
// ! Are these deprecated????
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';

/** ======= DATA ======= */
import Settings from '../data/Settings';

/** FOOTER */
const Footer = () => {
	return (
		<Box component="footer" sx={{
			textAlign: 'center',
			py: 4,
			boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
			bgcolor: ({ palette }) => palette.background.default,
			color: ({ palette }) => palette.text.secondary
		}}>
			<Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
				{/** // TODO: Maybe make this a component */}
				<IconButton
					component="a"
					href={`mailto:${Settings.email}`}
					aria-label="Send Email"
					title="Email"
					color="primary"
				>
					<Email />
				</IconButton>
				<IconButton
					href={Settings.github}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
					title="GitHub"
					color="primary"
					component='a'>
					<GitHub />
				</IconButton>
				<IconButton
					component="a"
					href={Settings.linkedIn}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
					title="LinkedIn"
					color="primary"
				>
					<LinkedIn />
				</IconButton>
			</Box>
			<Typography variant="body2" sx={{ mt: 3, color: ({ palette }) => palette.text.secondary }}>
				© 2025 {Settings.name}. All rights reserved.
			</Typography>
		</Box>
	);
};

export default Footer;
