// MUI Material

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { divCenter } from '../data/Styles';

// Loading Page

export default function Loading() {
    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    flexDirection: 'column',
                    height: '70vh',
                    textAlign: 'center',
                    ...divCenter
                }}
            >
                <CircularProgress size={60} thickness={5} color="primary" />
                <Typography variant="h6" sx={{ mt: 3 }}>
                    Loading your content...
                </Typography>
                <Typography variant="body2" sx={{ color: ({ palette }) => palette.text.secondary, mt: 1 }}>
                    Please wait a moment.
                </Typography>
            </Box>
        </Container>
    );
}