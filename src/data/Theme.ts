import { createTheme } from '@mui/material';

/** The primary for this project */
const primary = '#6093EA';
/** The secondary for this project */
const secondary = '#9C27B0';

/** The MUI lightTheme config */
export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: { main: primary },
		secondary: { main: secondary },
	},
});

/** The MUI darkTheme config */
export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: { main: '#6093EA' },
		secondary: { main: '#9C27B0' },
	},
});
