import React from "react";
import "../Home.css"; // Ensure this CSS file is created and linked properly
import userImage from '../images/handsome-man-isolated-white-background.jpg';
import userImage1 from '../images/portrait-hapy-young-smart-man-glasses-white-wall.jpg';
import userImage2 from '../images/portrait-hapy-young-smart-man-glasses-white-wall.jpg';
import { Box, Typography, Grid, TextField, Card, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Home = () => {
    return (
        <Box className="home">
            <Box className="background-image" >
                <Box
                    className="overlay-text"
                >

                    <Typography
                        sx={{
                            textAlign:"left",
                            marginTop: "40px",
                            fontWeight: 'bold',
                            fontSize: "44px !important", // Add !important
                            fontFamily: "Source Serif Pro  !important",
                        }}
                    >
                        Leave the office behind <br />
                        <br></br>
                        and{' '}
                        <span
                            style={{
                                color: '#F5B963', // Highlighted color for "unwind"
                                fontSize: '44px', // Larger font size for "unwind"
                                fontWeight: 'bold', // Optional bold styling
                            }}
                        >
                            unwind
                        </span>
                    </Typography>

                    <Typography sx={{ fontFamily: "Poppins", marginTop: "10px", fontSize: "16" }}>
                        Welcome to our cozy cabin nestled in the heart of the mountains!
                    </Typography>
                    <Typography>
                        Our cabin is the perfect getaway for those seeking peace and
                    </Typography>
                    <Typography>relaxation in a natural setting.</Typography>

                    {/* User Rating and Trustpilot Rating */}
                    <Box className="rating-wrapper">
                        <Box className="user-rating">
                            <Box className="face-circle">
                                <img src={userImage} alt="user1" />
                            </Box>
                            <Box className="face-circle">
                                <img src={userImage1} alt="user2" />
                            </Box>
                            <Box className="face-circle">
                                <img src={userImage2} alt="user3" />
                            </Box>
                        </Box>

                        <Box className="trust-rating">
                            <span className="trust-text">
                                <span className="star">★</span> Trustpilot
                            </span>

                            <Box className="stars">
                                <span className="star square">★</span>
                                <span className="star square">★</span>
                                <span className="star square">★</span>
                                <span className="star square">★</span>
                                <span className="star square">★</span>
                            </Box>
                            <span className="rating">4.5/5</span>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Card
                variant="outlined"
                sx={{
                    width: '100%',
                    maxWidth: 1200,
                    margin: '-100px auto',
                    marginTop: '400px',
                    padding: 2,
                    position: 'absolute',
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            flexWrap: 'nowrap',
                            overflowX: 'auto',
                        }}
                    >
                        <Grid item xs={2.4}>
                            <TextField
                                label="I want to go"
                                required
                                id="outlined-required"


                                sx={{
                                    width: '100%',
                                    maxWidth: '300px',
                                    mt: 0,

                                }}
                            />
                        </Grid>
                        <Grid item xs={2.4}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Check in" />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={2.4}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Check out" />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={2.4}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Travellers"
                                sx={{
                                    width: '100%',
                                    maxWidth: '300px',
                                    mt: 0,
                                }}
                            />
                        </Grid>
                        <Grid item xs={2.4}>
                            <Button
                                sx={{
                                    mt: 0,
                                    "&:hover": {
                                        backgroundColor: "white"
                                    },
                                }}
                                variant="contained"
                                style={{
                                    width: '200px',
                                    height: '50px',
                                    backgroundColor: '#233D2C',
                                }}
                            >
                                Find available cabins
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Card>
        </Box>
    );
};

export default Home;
