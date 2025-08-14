/** ======= REACT ======= */
import { type FC } from 'react';

/** ======= MUI COMPONENTS ======= */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';

/** ======= MUI ICONS ======= */
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';

/** ======= TYPES ======= */
import type { HeaderProps } from '../data/Data';
import { divCenter } from '../data/Styles';

const StyledExternalLink = styled(Link)(({ theme }) => ({
	color: 'inherit',
	textDecoration: 'none',
	marginRight: theme.spacing(2),
	fontWeight: 'normal',
	display: 'inline-flex',
	alignItems: 'center',
	'&:hover': {
		textDecoration: 'none',
	},
}));

const Header: FC<HeaderProps> = ({ mode, toggleColorMode }) => {
	const theme = useTheme();
	return (
		<AppBar
			sx={{
				bgcolor: ({ palette }) => palette.background.default,
				color: ({ palette }) => palette.text.primary,
				position: 'static'
			}}
		>
			<Toolbar>
				<Box sx={{
					width: 48,
					height: 48,
					borderRadius: '50%',
					backgroundColor: ({ palette }) => palette.primary.main,
					...divCenter,
					overflow: 'hidden',
					mr: 1
				}}>
					<Box
						component="img"
						src="pfp.png"
						alt="Logo"
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
						}}
					/>
				</Box>
				{/** // TODO: EXTRACT TO COMPONENT */}
				<StyledExternalLink href="https://mohammadelhsn.github.io/">
					<Button color="inherit">
						Home
					</Button>
				</StyledExternalLink>
				{/** // TODO: EXTRACT TO COMPONENT */}
				<StyledExternalLink href="https://mohammadelhsn.github.io/#/projects">
					<Button color="inherit">
						Projects
					</Button>
				</StyledExternalLink>
				<Typography sx={{
					flexGrow: 1,
				}} />
				<IconButton
					onClick={toggleColorMode}
					size="small"
					sx={{
						border: `1px solid ${theme.palette.divider}`,
						borderRadius: 3,
						p: 0.75,
						transition: 'all 0.3s ease',
						'&:hover': {
							backgroundColor: ({ palette }) => palette.action.hover,
						}
					}}
				>
					{mode === 'light' ? (
						<DarkModeIcon sx={{ color: ({ palette }) => palette.primary.main }} />
					) : (
						<LightModeIcon sx={{ color: ({ palette }) => palette.primary.main }} />
					)}
				</IconButton>

			</Toolbar>
		</AppBar>
	);
};

export default Header;
