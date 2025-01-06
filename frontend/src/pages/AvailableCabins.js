// src/GiftAStay.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../images/bg2.png";

const AvailableCabins = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "500px", // Set the desired height
        backgroundColor: "#F2FAF9", // Light background color
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Image centered */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "80%", // Adjust the size of the image
          backgroundImage: `url(${backgroundImage})`, // Background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "8px",
        }}
      ></Box>

      {/* Overlay Content */}
      <Box
        sx={{
          textAlign: "center",
          textAlign:"left",
          marginLeft:"15%",
          marginRight:"50%",
        //   backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for better contrast
          padding: "20px",
          borderRadius: "8px",
          zIndex: 1, // Ensure the text is above the image
        }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", mb: 2, color:"#FFFFFF"}}>
          Nourish the mind, body, and spirit.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#FFFFFF" }}>
          Many people find that the combination of being in a peaceful natural
          setting and engaging in activities that nourish the mind, body, and
          spirit leave them feeling rejuvenated and refreshed.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F5B963",
            color: "black",
            padding: "10px 20px",
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#d49b4f",
            },
          }}
        >
          Find available cabins
        </Button>
      </Box>
    </Box>
  );
};

export default AvailableCabins;
