import * as React from 'react';
import {
    Typography,
    AppBar,
    Toolbar,
    Box,
    Container,
    Stack,
    Button,
    Grid,
    Paper,
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

                <Container style={{ marginTop: 50 }}>
                    <Grid container component="main" sx={{ height: '50vh' }}>
                        <Grid
                            item
                            xs={false}
                            sm={6}
                            md={6}
                            sx={{
                                backgroundImage: 'url(tree_and_sun.jpeg)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Typography
                                    component="h4"
                                    variant="h5"
                                    color="text.primary"
                                    gutterBottom
                                >
                                    About Green Horizon Initiative
                                </Typography>
                                <Typography variant="body1">
                                    Welcome to Green Horizon Initiative, where passion for the planet meets the power of community. At Green Horizon, we believe in the transformative potential of trees and the profound impact they can have on our environment and collective well-being.
                                </Typography>

                                <Typography component="h5" fontWeight={"bold"} style={{ marginTop: 10 }}>🌍 Our Vision</Typography>
                                <Typography variant="body1">
                                    We envision a world where urban landscapes flourish with lush greenery, where communities actively engage in tree-centric initiatives, and where sustainable practices become a way of life. Through our projects, we aim to create lasting impressions on the Earth and in the hearts of those who join us.
                                </Typography>

                                <Typography component="h5" fontWeight={"bold"} style={{ marginTop: 10 }}>🌱 Our Mission</Typography>
                                <Typography variant="body1">
                                    Our mission is to foster a deeper connection between people and nature by spearheading innovative planting projects. From pioneering Urban Tree Mapping endeavors to leveraging cutting-edge technology for Tree Identification Apps, we are committed to empowering individuals to be stewards of the environment.
                                </Typography>

                                <Typography component="h5" fontWeight={"bold"} style={{ marginTop: 10 }}>🤝 Community-Centric Approach</Typography>
                                <Typography variant="body1">
                                    Green Horizon Initiative is more than just a collection of projects; it's a vibrant community of individuals passionate about making a positive impact. We believe that true change happens when communities come together with a shared purpose. Join our growing family of green warriors and be part of a movement that transcends borders.
                                </Typography>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </Box>
    );
}

