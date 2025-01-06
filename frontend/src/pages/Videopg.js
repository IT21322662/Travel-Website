// src/GiftAStay.js
import React from "react";
import VideoPlaceholderImage from "../images/Video card.png"; // Placeholder image
import { Grid, Typography, Box } from "@mui/material";

const Videopg = () => {
  return (
    <div className="gift-section">
      <Grid container spacing={4} alignItems="center">
        {/* Text Section - Left */}
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 ,}}>
          <Typography
            variant="h4"
            // component="h2"
            // margin={left}
            sx={{ fontWeight: "bold", color:"#22223C",textAlign:"left", marginLeft:"200px", marginTop:"-220px"}}
          >
           Get ready to unwind
          </Typography>
          <Typography variant="body1" sx={{textAlign:"left", marginLeft:"200px"}}>
            Escape the hustle and bustle of everyday life with our curated
            stays. Nestled in scenic landscapes, our cabins offer the perfect
            retreat for relaxation and rejuvenation.
          </Typography>
          <br></br>
          <Typography variant="body1" sx={{textAlign:"left",  marginLeft:"200px"}}>
            Whether you're looking to reconnect with nature, enjoy quality time
            with loved ones, or simply unwind, our accommodations cater to all
            your needs.
          </Typography>
        </Grid>

        {/* Video Section - Right */}
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer", // Makes it look clickable
            }}
            onClick={() => alert("Video Placeholder Clicked!")}
          >
            {/* Placeholder Image */}
            <img
              src={VideoPlaceholderImage}
              alt="Video Placeholder"
              style={{
                width: "100%",
                display: "block",
              }}
            />
            {/* Play Icon Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                borderRadius: "50%",
                padding: "10px",
              }}
            >
              <Typography
                variant="h4"
                component="span"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                ▶
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Videopg;
