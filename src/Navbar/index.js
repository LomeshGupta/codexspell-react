import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import logo from "../Assets/logo-bgrem.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import DemoButtonWithButton from "../Components/DemoButtonWithForm";
import { Scale } from "react-marquee-slider";
import { Translate } from "@mui/icons-material";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // State for Drawer
  const [bgColor, setBgColor] = useState("transparent"); // State for background color
  const [submenuOpen, setSubmenuOpen] = useState(false); // State for submenu in mobile view
  const open = Boolean(anchorEl);
  const solutionsButtonRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:900px)"); // Check if it's mobile view
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuOpen = () => {
    setAnchorEl(solutionsButtonRef.current);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleSubmenuToggle = (event) => {
    event.stopPropagation(); // Prevent drawer from closing
    setSubmenuOpen(!submenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/") {
        // If the path is not '/', set the background to #000
        setBgColor("#000");
      } else {
        if (window.scrollY > 50) {
          setBgColor("#000");
        } else {
          setBgColor("transparent");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]); // Add location.pathname as dependency

  useEffect(() => {
    // Ensure background color is correctly set when the path is not '/'
    if (location.pathname !== "/") {
      setBgColor("#000");
    }
  }, [location.pathname]);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: bgColor,
        padding: isMobile ? "10px 20px" : "10px 40px",
        boxShadow: "none",
        transition: "background-color 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center" }}
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          />
          {!isMobile && (
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontWeight: "550",
                color: "#d43126",
                fontSize: "30px",
              }}
            >
              <span style={{ fontWeight: "900", color: "white" }}>Code</span>
              <span
                style={{
                  fontFamily: "cursive",
                  color: "green",
                  fontSize: "30px",
                }}
              >
                X
              </span>
              Spell
            </Typography>
          )}
        </Box>

        {isMobile ? (
          <>
            <IconButton
              onClick={handleDrawerOpen}
              sx={{
                color: "#fff",
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerClose}
            >
              <Box sx={{ width: 250 }} role="presentation">
                <List>
                  <ListItem button onClick={() => navigate("/overview")}>
                    <ListItemText primary="Overview" />
                  </ListItem>
                  <ListItem button onClick={handleSubmenuToggle}>
                    <ListItemText primary="Solutions" />
                    {submenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Collapse in={submenuOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem
                        button
                        sx={{ pl: 4 }}
                        onClick={() => navigate("/solutions/erp")}
                      >
                        <ListItemText primary="ERP Implementation and Support Services" />
                      </ListItem>
                      <ListItem
                        button
                        sx={{ pl: 4 }}
                        onClick={() => navigate("/solutions/d365bc")}
                      >
                        <ListItemText primary="D365BC Functional and Technical Training Program" />
                      </ListItem>
                      <ListItem
                        button
                        sx={{ pl: 4 }}
                        onClick={() => navigate("/solutions/web-development")}
                      >
                        <ListItemText primary="Website Development" />
                      </ListItem>
                      <ListItem
                        button
                        sx={{ pl: 4 }}
                        onClick={() =>
                          navigate("/solutions/custom-app-development")
                        }
                      >
                        <ListItemText primary="Custom App Development (Web and Mobile)" />
                      </ListItem>
                      <ListItem
                        button
                        sx={{ pl: 4 }}
                        onClick={() =>
                          navigate("/solutions/project-management")
                        }
                      >
                        <ListItemText primary="Project Management Services" />
                      </ListItem>
                      <ListItem
                        button
                        sx={{ pl: 4 }}
                        onClick={() => navigate("/solutions/cloud-hosting")}
                      >
                        <ListItemText primary="Cloud Hosting with Dedicated Support" />
                      </ListItem>
                    </List>
                  </Collapse>
                  <ListItem button onClick={() => navigate("/blogs")}>
                    <ListItemText primary="Blogs" />
                  </ListItem>
                  <ListItem button onClick={() => navigate("/contact")}>
                    <ListItemText primary="Contact" />
                  </ListItem>
                  <ListItem>
                    <DemoButtonWithButton />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              marginLeft: "auto",
            }}
          >
            <Button
              sx={{
                color: "#fff",
                textTransform: "none",
                fontWeight: "500",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => navigate("/overview")}
            >
              Overview
            </Button>

            <Button
              sx={{
                color: "#fff",
                textTransform: "none",
                fontWeight: "500",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => navigate("/blogs")}
            >
              Blogs
            </Button>

            <Button
              ref={solutionsButtonRef}
              sx={{
                color: "#fff",
                textTransform: "none",
                fontWeight: "500",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onMouseOver={handleMenuOpen}
              aria-controls="solutions-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              Solutions
            </Button>
            <Menu
              id="solutions-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{
                onMouseLeave: handleMenuClose,
              }}
              sx={{
                "& .MuiMenu-paper": {
                  backgroundColor: "#fff",
                },
              }}
            >
              <MenuItem onClick={() => navigate("/solutions/erp")}>
                ERP Implementation and Support Services
              </MenuItem>
              <MenuItem onClick={() => navigate("/solutions/d365bc")}>
                D365BC Functional and Technical Training Program
              </MenuItem>
              <MenuItem onClick={() => navigate("/solutions/web-development")}>
                Website Development
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/solutions/custom-app-development")}
              >
                Custom App Development (Web and Mobile)
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/solutions/project-management")}
              >
                Project Management Services
              </MenuItem>
              <MenuItem onClick={() => navigate("/solutions/cloud-hosting")}>
                Cloud Hosting with Dedicated Support
              </MenuItem>
            </Menu>

            <Button
              sx={{
                color: "#fff",
                textTransform: "none",
                fontWeight: "500",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => navigate("/contact")}
            >
              Contact
            </Button>

            <DemoButtonWithButton />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
