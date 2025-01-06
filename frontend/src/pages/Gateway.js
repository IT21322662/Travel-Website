import React from "react";
import { Box, Typography,Button } from "@mui/material";
import backgroundI from "../images/bg3.png";

const Gateway = () => {
  return (
    <Box
      sx={{
        height: "100vh", // Full viewport height
        display: "flex",
        flexDirection: "column", // Align items vertically
        justifyContent: "center",
        alignItems: "flex-start", // Align items to the left
        paddingLeft: "50px", // Add left padding
        textAlign: "left", // Align text to the left
        color: "#FFFFFF", // Text color for contrast
        backgroundImage: `url(${backgroundI})`, // Set the image as the background
        backgroundSize: "cover", // Ensures the image covers the section
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents repeating
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "#FFFFFF",
          fontWeight: "bold",
          marginBottom: 2,
          fontSize: 44,
          fontFamily: "Source Serif Pro",
        }}
      >
        Escape from endless Zoom calls
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#FFFFFF",
          fontSize: 14,
          fontFamily: "Poppins",
          marginTop: "20px",
          maxWidth: "500px", // Restrict text width for better readability
        }}
      >
        Discover the wonders of spending time offline and away from the office with our 3-day weekend getaway cabin retreats.
      </Typography>
      <Button
          variant="contained"
          sx={{
            marginTop:"30px",
            backgroundColor: "#D4EEEC",
            color: "black",
            padding: "10px 20px",
            fontWeight: "bold",
            fontSize:14,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#d49b4f",
            },
          }}
        >
          Find the perfect getaway
        </Button>
    </Box>
    
  );
};

export default Gateway;
