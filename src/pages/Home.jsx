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
    Card,
    CardMedia,
    CardContent,
    TextField,
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
                        Project X - Green Horizon Initiative
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
                {/* Header Section */}
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
                        <Button variant="contained" href='#aboutUs'>About Us</Button>
                        <Button variant="outlined" href='#ourServices'>Our Services</Button>
                        <Button variant="outlined" href='#contactUs'>Contacts</Button>
                    </Stack>
                </Container>

                {/* About us Section */}
                <Container style={{ marginTop: 50, position: "relative" }}>
                    <Grid container component="main">
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
                                    id="aboutUs"
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

                {/* Our Services Section */}
                <Container style={{ marginTop: 50, position: "relative" }}>
                    <Typography
                        component="h4"
                        variant="h5"
                        color="text.primary"
                        gutterBottom
                        id="ourServices"
                    >
                        Services we offer at Green Horizon Initiative
                    </Typography>
                    <Grid container component="main" spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        pt: '56.25%',
                                    }}
                                    image="urban_tree_mapping.jpeg"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        🌱 1. Urban Tree Mapping
                                    </Typography>
                                    <Typography>
                                        Explore our cutting-edge Urban Tree Mapping service, where we leverage Geographic Information System (GIS) technology to create detailed digital maps of urban trees. This service not only provides valuable insights into tree distribution and health but also fosters a sense of community engagement in sustainable urban development.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        pt: '56.25%',
                                    }}
                                    image="tree_development.jpeg"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        📱 2. Tree Identification App Development
                                    </Typography>
                                    <Typography>
                                        Immerse yourself in the world of innovation with our Tree Identification App Development service. Harnessing the power of image recognition technology, we create mobile apps that empower users to identify tree species effortlessly. This service is a bridge between technology and nature, making tree identification accessible to all.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        pt: '56.25%',
                                    }}
                                    image="community_tree_planting.jpeg"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        🌳 3. Community Tree Planting Programs
                                    </Typography>
                                    <Typography>
                                        Join us in the field with our Community Tree Planting Programs, where we turn aspirations into action. Through collaborative efforts, we organize and lead initiatives to plant trees in public spaces, streets, and parks. Be part of the change, and witness the transformation of urban landscapes into green havens.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>


                {/* Contact us Section */}
                <Container style={{ marginTop: 50, position: "relative" }}>
                    <Grid container component="main">
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
                                    id="contactUs"
                                    component="h4"
                                    variant="h5"
                                    color="text.primary"
                                    gutterBottom
                                >
                                    How to reach us at Green Horizon Initiative
                                </Typography>

                                <form onSubmit={() => alert("Thank you for contacting us :) We shall get back to you soon.")}>
                                    <TextField
                                        label="Your Name"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        label="Email Address"
                                        type="email"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        label="Message"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        required
                                    />
                                    <Button type="submit" variant="contained" color="primary">
                                        Submit
                                    </Button>
                                </form>

                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={false}
                            sm={6}
                            md={6}
                            sx={{
                                backgroundImage: 'url(contact_us.jpeg)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

