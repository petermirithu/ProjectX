import * as React from 'react';
import {
    Typography,
    AppBar,
    Toolbar,
    Box,
    Container,
    Stack,
    Button,
} from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';

export default function Home() {

    React.useEffect(() => {

    }, []);

    return (
        <Box>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Project X
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        🌿 Welcome to the Green Horizon Initiative! 🌳
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" paragraph>
                        Embark on a journey with us as we delve into exciting planting projects that not only breathe life into our surroundings but also weave a tapestry of sustainable change. From creating an Urban Tree Oasis to developing cutting-edge Tree Identification Apps, our community-driven initiatives are redefining the future
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button variant="contained">About Us</Button>
                        <Button variant="outlined">Our Services</Button>
                        <Button variant="outlined">Contacts</Button>
                    </Stack>
                </Container>
            </Box>

        </Box>
    );
}

