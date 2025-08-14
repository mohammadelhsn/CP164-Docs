/** ======= REACT ROUTER ======= */
import { useNavigate } from 'react-router-dom';

/** ======= MUI COMPONENTS ======= */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

/** ======= MUI ICONS ======= */
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListIcon from '@mui/icons-material/List';
import BiotechIcon from '@mui/icons-material/Biotech';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

/** ======= CUSTOM COMPONENTS ======= */
import ItemList from '../components/ItemList';
import SectionWrapper from '../components/Section';

/** ======= FUNCTIONS & STYLES ======= */
import type { LabsAssignmentsOpts } from '../data/Data';
import { containerStyles, iconStyles, textStyle } from '../data/Styles';
import { enableFile } from '../data/Functions';

/** Create a page for the lab/assignment showing all the labs/assignments */
const LabsAssignmentsPage = (opts: LabsAssignmentsOpts) => {
	const Icon = opts.type == 'assignment' ? AssignmentIcon : opts.type == 'example' ? LightbulbIcon : BiotechIcon;
	const isFile = enableFile(opts.type);
	const navigate = useNavigate();
	return (
		<Container maxWidth="lg" sx={containerStyles}>
			<Box sx={{ mb: 2 }}>
				<IconButton onClick={() => navigate(-1)} aria-label="Go back">
					<ArrowBackIcon />
				</IconButton>
			</Box>
			<Box>
				<Typography variant="h2" sx={textStyle}>
					<Icon fontSize='inherit' sx={iconStyles} /> {opts.type === 'assignment' ? 'Assignments' : opts.type == 'lab' ? 'Labs' : 'Examples'}
				</Typography>
				<Typography variant="h5" sx={{ fontStyle: 'italic' }}>
					Here are the documented {opts.type}s.
				</Typography>
				<Divider sx={{ my: 4 }} />
			</Box>
			<SectionWrapper title="Documentation" icon={ListIcon}>
				<ItemList itemType={opts.type} isFile={isFile}></ItemList>
			</SectionWrapper>
		</Container >
	);
};

export default LabsAssignmentsPage;