import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LogoSrc from "../Assets/logo-bgrem.png";
import { color } from "framer-motion";

// Replace this with your logo component or image
const Logo = () => (
  <Box
    m={3}
    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <img src={LogoSrc} alt="Logo" style={{ maxHeight: "200px" }} />
  </Box>
);

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      pt={7}
      pb={7}
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "40px 40px",
        // boxShadow: 3, // Added shadow
      }}
    >
      <Grid
        container
        alignItems="center"
        spacing={isMobile ? 0 : 2}
        direction={isMobile ? "column" : "row"}
      >
        {/* Logo Section */}
        <Grid item xs="auto">
          <Logo />
        </Grid>

        {/* Vertical Divider (Hidden on mobile) */}
        {!isMobile && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ m: 4, bgcolor: "#fff", height: "200px" }} // Changed divider color to black
          />
        )}

        {/* Location */}
        <Grid textAlign={isMobile ? "center" : "left"} mb={2} item xs>
          <Typography
            variant="h6"
            sx={{
              color: "#fff", // Updated text color for better visibility on white
              marginBottom: "5px",
              fontSize: "2rem",
            }}
          >
            Why Us?
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "1rem" }}>
            We blend innovation and expertise to create seamless, custom tech
            solutions that transform your business, making the impossible
            possible and driving success in a digital world.
          </Typography>
        </Grid>

        {/* Vertical Divider (Hidden on mobile) */}
        {!isMobile && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ m: 4, bgcolor: "#fff", height: "200px" }} // Changed divider color to black
          />
        )}

        {/* Navigation Links */}
        <Grid item xs>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={isMobile ? "center" : "flex-start"}
            m={isMobile ? 5 : 0}
          >
            <Link
              href="#"
              color="inherit"
              sx={{ marginBottom: "5px", fontSize: "1.75rem" }}
            >
              ABOUT
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{ marginBottom: "5px", fontSize: "1.75rem" }}
            >
              OVERVIEW
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{ marginBottom: "5px", fontSize: "1.75rem" }}
            >
              SOLUTIONS
            </Link>
            <Link href="#" color="inherit" sx={{ fontSize: "1.75rem" }}>
              CONTACT
            </Link>
          </Box>
        </Grid>

        {/* Vertical Divider (Hidden on mobile) */}
        {!isMobile && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ m: 4, bgcolor: "#fff", height: "200px" }} // Changed divider color to black
          />
        )}

        {/* Social Icons & Footer Info */}
        <Grid item>
          <Box display="flex" alignItems="center" justifyContent="center">
            <IconButton
              sx={{ color: "#fff", padding: "5px" }} // Updated icon color for better visibility
              href="#"
            >
              <TwitterIcon fontSize="large" />
            </IconButton>
            <IconButton
              sx={{ color: "#fff", padding: "5px" }} // Updated icon color for better visibility
              href="#"
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton
              sx={{ color: "#fff", padding: "5px" }} // Updated icon color for better visibility
              href="#"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              sx={{ color: "#fff", padding: "5px" }} // Updated icon color for better visibility
              href="#"
            >
              <YouTubeIcon fontSize="large" />
            </IconButton>
          </Box>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.9rem", textAlign: "center", marginTop: "5px" }}
          >
            <spna style={{ fontSize: "20px" }}>
              Code
              <spna
                style={{
                  fontFamily: "cursive",
                  color: "green",
                  fontSize: "30px",
                }}
              >
                X
              </spna>
              Spell
            </spna>
            <br />© CXS 2024. All rights reserved.
          </Typography>
          <Box display="flex" justifyContent="center" sx={{ marginTop: "5px" }}>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              sx={{ marginRight: "10px", fontSize: "0.75rem" }}
            >
              PRIVACY
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              sx={{ marginRight: "10px", fontSize: "0.75rem" }}
            >
              COOKIES
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              sx={{ fontSize: "0.75rem" }}
            >
              TERMS & CONDITIONS
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
