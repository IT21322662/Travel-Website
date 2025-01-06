import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { ArrowForward as ArrowIcon } from "@mui/icons-material";

// Item component to style the content inside the Grid items
const Item = ({ children }) => (
    <Box sx={{
        padding: "16px",
        textAlign: "center",
        border: "1px solid #ccc",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px"
    }}>
        {children}
    </Box>
);

const FAQSection = () => {
    return (
        <Box sx={{ padding: "40px 200px", backgroundColor: "#FFFFFF" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#1F3D3E", textAlign: "left", fontFamily: "Source Serif Pro", fontSize: 28 }}>
                Frequently asked questions
            </Typography>
            <Grid container spacing={2}>
                {/* Grid item for the FAQ title */}
                <Grid item xs={8} md={8}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#1F3D3E", textAlign: "left", fontFamily: "Poppins" }}>
                        1. About Unwind Cabins
                    </Typography>
                    <Typography textAlign={"left"} sx={{ fontFamily: "Poppins" }}>• How long have you been in business?</Typography>
                    <Typography textAlign={"left"} sx={{ fontFamily: "Poppins" }}>• Why did you start this journey?</Typography>
                </Grid>

                {/* Grid item for another section (Example: xs=4) */}
                <Grid item xs={4} md={4}>
                    <Button
                        variant="outlined"
                        sx={{
                            width: 550,
                            height: 90,
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "10px 10px 10px 20px",
                            backgroundColor: "#F5B963",
                            textAlign: "right",
                            marginLeft: "-300px",
                            marginTop: "10px"

                        }}
                    >
                        <Typography color="#000000">About Unwind Cabins</Typography>
                        <ArrowIcon />
                    </Button>
                </Grid>

                <Grid item xs={8} md={8} sx={{marginTop: "-45px"}}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#1F3D3E", textAlign: "left", mt: 4, fontFamily: "Poppins" }}>
                        2. Tell me more about the cabin
                    </Typography>
                    <Typography textAlign={"left"} sx={{ fontFamily: "Poppins" }}>• What do I need to bring?</Typography>
                    <Typography textAlign={"left"} sx={{ fontFamily: "Poppins" }}>• How do I get to the cabin?</Typography>
                </Grid>

                {/* Grid item for another section (Example: xs=4) */}
                <Grid item xs={4} md={4}>
                    <Button
                        variant="outlined"
                        sx={{
                            width: 550,
                            height: 90,
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "10px 10px 10px 20px",
                            backgroundColor: "#F5B963",
                            textAlign: "right",
                            marginLeft: "-300px",
                            marginTop: "10px"
                        }}
                    >
                        <Typography color="#000000">Tell me more about the cabin</Typography>
                        <ArrowIcon />
                    </Button>
                </Grid>

                <Grid item xs={8} md={8} sx={{marginTop: "-50px"}}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#1F3D3E", textAlign: "left", mt: 4, fontFamily: "Poppins" }}>
                        3. Pets, family & friends
                    </Typography>
                    <Typography textAlign={"left"} sx={{ fontFamily: "Poppins" }}>• Please tell me I can bring my dog</Typography>
                    <Typography textAlign={"left"} sx={{ fontFamily: "Poppins" }}>• How many people do your cabins sleep?</Typography>
                </Grid>

                {/* Grid item for another section (Example: xs=4) */}
                <Grid item xs={4} md={4}>
                    <Button
                        variant="outlined"
                        sx={{

                            width: 550,
                            height: 90,
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "10px 10px 10px 20px",
                            backgroundColor: "#F5B963",
                            textAlign: "right",
                            marginLeft: "-300px",
                            marginTop: "10px"


                        }}
                    >
                        <Typography color="#000000">Pets, family & friends</Typography>
                        <ArrowIcon />
                    </Button>
                </Grid>

                <Grid item xs={8} md={8}>
                    <Typography variant="h6" sx={{ fontSize: 14, mb: 2, color: "#1F3D3E", textAlign: "left", mt: 4 }}>
                        <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold", mb: 2, color: "#1F3D3E", textAlign: "left", mt: 4 }}>Still have a question?</Typography>
                        If you still have questions, contact a member of the team on live chat, and we’d be more than happy to help.
                    </Typography>
                </Grid>
            </Grid>
        </Box>

        // <Box sx={{ padding: "40px 20px", backgroundColor: "#FFFFFF" }}>
        //     <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "left", mb: 4, fontSize: "28px" }}>
        //         Frequently Asked Questions
        //     </Typography>

        //     {/* Main FAQ Questions Grid */}
        //     <Grid container spacing={1} sx={{ justifyContent: "flex-start" }}>
        //         <Grid item xs={4}>
        //             <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#1F3D3E", textAlign: "left" }}>
        //                 1. About Unwind Cabins
        //             </Typography>
        //             <Typography textAlign={"left"}>• How long have you been in business?</Typography>
        //             <Typography textAlign={"left"}>• Why did you start this journey?</Typography>

        //             <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#1F3D3E", textAlign: "left", mt: 4 }}>
        //                 2. Tell me more about the cabin
        //             </Typography>
        //             <Typography textAlign={"left"}>• What do I need to bring?</Typography>
        //             <Typography textAlign={"left"}>• How do I get to the cabin?</Typography>

        //             <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#1F3D3E", textAlign: "left", mt: 4 }}>
        //                 3. Pets, family & friends
        //             </Typography>
        //             <Typography textAlign={"left"}>• Please tell me I can bring my dog</Typography>
        //             <Typography textAlign={"left"}>• How many people do your cabins sleep?</Typography>

        //             {/* Additional text section */}
        //             <item sx={{ textAlign: "left", mt: 4 }}>
        //                 <Typography variant="body1" sx={{ mb: 3 }}>
        //                     Still have a question? If you still have questions, contact a member of the team on live chat, and we’d be more than happy to help.
        //                 </Typography>
        //             </item>
        //         </Grid>





        //         {/* Buttons with Arrow Icons on the Right */}
        //         <Grid container spacing={4} sx={{ justifyContent: "flex-end", mt: 4 }}>
        //             {/* Button for About Unwind Cabins */}
        //             <Grid item xs={8} >
        //                 <Button
        //                     variant="outlined"
        //                     sx={{
        //                         width: "100%",
        //                         display: "flex",
        //                         justifyContent: "space-between",
        //                         padding: "10px",
        //                         backgroundColor: "#F5B963",
        //                         textAlign: "right",
        //                     }}
        //                 >
        //                     <Typography>1. About Unwind Cabins</Typography>
        //                     <ArrowIcon />
        //                 </Button>
        //             </Grid>

        //             {/* Button for Tell me more about the cabin */}
        //             <Grid item xs={8}>
        //                 <Button
        //                     variant="outlined"
        //                     sx={{
        //                         width: "100%",
        //                         display: "flex",
        //                         justifyContent: "space-between",
        //                         padding: "10px",
        //                         backgroundColor: "#F5B963",
        //                         textAlign: "right",
        //                     }}
        //                 >
        //                     <Typography>2. Tell me more about the cabin</Typography>
        //                     <ArrowIcon />
        //                 </Button>
        //             </Grid>

        //             {/* Button for Pets, family & friends */}
        //             <Grid item xs={8}>
        //                 <Button
        //                     variant="outlined"
        //                     sx={{
        //                         width: "100%",
        //                         display: "flex",
        //                         justifyContent: "space-between",
        //                         padding: "10px",
        //                         backgroundColor: "#F5B963",
        //                         textAlign: "right",
        //                     }}
        //                 >
        //                     <Typography>3. Pets, family & friends</Typography>
        //                     <ArrowIcon />
        //                 </Button>
        //             </Grid>
        //         </Grid>
        //     </Grid>
        // </Box>

    );
};

export default FAQSection;
