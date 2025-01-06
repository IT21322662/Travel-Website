import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0C1011", // Background color
        color: "#FFFFFF", // Text color for contrast
        padding: "100px 50px", // Padding around the content
        fontFamily: "Arial, sans-serif", // Font for better readability
      }}
    >
      {/* Grid Container Divided into Columns */}
      <Grid container spacing={4}>
        {/* Column 1 */}
        <Grid item xs={12} md={2}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              textAlign: "left",
               marginLeft:"20px"
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: "1.6",
              textAlign: "left",
              marginLeft:"20px"
            }}
          >
            Our Story
            <br />
            Why Us
            <br />
            How It Works
            <br />
            FAQ
          </Typography>
        </Grid>

        {/* Column 2 */}
        <Grid item xs={12} md={2}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              textAlign: "left",
            }}
          >
            Our cabins
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: "1.6",
              textAlign: "left",
            }}
          >
            North of London
            <br />
            Golden Hideaway
            <br />
            Acacia Retreat
            <br />
            Blue Lagoon
            <br />
            <br />
            South of London
            <br />
            Lavender Retreat
            <br />
            Butterfly Treehouse
            <br />
            Mahogany Hideaway
          </Typography>
        </Grid>

        {/* Column 3 */}
        <Grid item xs={12} md={2}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              textAlign: "left",
            }}
          >
            Get inspired
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: "1.6",
              textAlign: "left",
            }}
          >
            Explore nature
            <br />
            Hiking trails
            <br />
            Swimming
            <br />
            Fishing
            <br />
            Boating
            <br />
            Cycling
            <br />
            <br />
            Rest, relax and re-set
            <br />
            Spa treatments
            <br />
            Hot tubs
            <br />
            Nature Trails
            <br />
           
          </Typography>

         
        </Grid>

        {/* Column 4 */}
        <Grid item xs={12} md={2}>
     
          <Typography
            variant="body1"
            sx={{
              marginBottom: 2,
              marginTop:"45px",
              lineHeight: "1.6",
              textAlign: "left",
              marginLeft: "1px",
            }}
          >
             Great food and drink
            <br />
            Pubs
            <br />
            Restaurants
            <br />
            Food markets
            <br />
            Picnics
            For you and yours
            <br />
            Solo or a couple
            <br />
            Pet friendly
            <br />
            Accessible cabins

           
          </Typography>
        </Grid>

        {/* Column 5 - New Added Column */}
        <Grid item xs={12} md={2}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              textAlign: "left",
              marginLeft:"40px"
            }}
          >
             Support
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: "1.6",
              textAlign: "left",
              marginLeft:"40px"
            }}
          >
             Help
            <br />
            Contact us
            <br />
            Privacy Policy
            <br />
            Terms of Service
            <br />
            Complaints Policy
          </Typography>
        </Grid>
      </Grid>

      {/* Grid for Email and Button on the Same Row */}
      <Grid container spacing={2} alignItems="center">
        {/* Email TextField */}
        <Grid item xs={4} md={2}>
          <TextField
            id="outlined-basic"
            label="Gmail"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "4px",
              marginTop: "20px",
              marginLeft: "750px",
            }}
          />
        </Grid>

        {/* Button */}
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#F5B963",
              color: "black",
              padding: "10px 20px",
              fontWeight: "bold",
              marginRight: "-1000px",
              marginTop: "20px",
              marginLeft: "left",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#d49b4f",
              },
            }}
          >
            Find Available Cabins
          </Button>
        </Grid>
      </Grid>

      {/* Horizontal Line */}
      <hr color="#346769" textAlign="center" />

      {/* Text and Icons Section */}
      <Grid container spacing={4} sx={{ marginTop: "20px", justifyContent: "center" }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textAlign: "left", // Center align this text
              marginBottom: "10px",
              fontSize: "24px",
              marginLeft: "-300px",
              marginTop: "50px"
            }}
          >
            UnwindCabins
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: "1.6",
              textAlign: "center", // Center align this text
              marginTop: "-40px"
            }}
          >
            © 2023 UnwindCabins
          </Typography>
        </Grid>
      </Grid>

      {/* Social Media Icons */}
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "-40px",
          justifyContent: "right",
          alignItems: "left",
        }}
      >
        {/* Icon 1 */}
        <Grid item>
          <a href="https://www.linkedin.com" target="_blank" rel="linkedin">
            <img
              src={require("../images/linkedin_Icon.png")}
              alt="linkedin"
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
            />
          </a>
        </Grid>

        {/* Icon 2 */}
        <Grid item>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src={require("../images/Twitter.png")}
              alt="Twitter"
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
            />
          </a>
        </Grid>

        {/* Icon 3 */}
        <Grid item>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src={require("../images/facebook_Icon.png")}
              alt="facebook"
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
            />
          </a>
        </Grid>

        {/* Icon 4 */}
        <Grid item>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src={require("../images/instagram_Icon.png")}
              alt="instagram"
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
            />
          </a>
        </Grid>

        {/* Icon 5 */}
        <Grid item>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img
              src={require("../images/youtube_Icon .png")}
              alt="youtube"
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
            />
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
