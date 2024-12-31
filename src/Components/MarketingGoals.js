import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import MG1 from "../Assets/bg3.jpg"; // Sample image for the background, replace with your service images

const services = [
  {
    title: "ERP Implementation and Support Services",
    image:
      "https://img.freepik.com/free-vector/gradient-erp-illustration_23-2149379179.jpg",
    route: "/solutions/erp", // Defined route for ERP
  },
  {
    title: "D365BC Functional and Technical Training Program",
    image:
      "https://img.freepik.com/free-photo/team-working-animation-project_23-2149269879.jpg",
    route: "/solutions/d365bc", // Defined route for D365BC
  },
  {
    title: "Website Development",
    image:
      "https://img.freepik.com/free-photo/top-view-man-working-computer-night-holding-mug-tea_169016-51092.jpg",
    route: "/solutions/web-development", // Defined route for Web Development
  },
  {
    title: "Custom App Development (Web and Mobile)",
    image:
      "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169863.jpg",
    route: "/solutions/custom-app-development", // Defined route for Custom App Development
  },
  {
    title: "Project Management Services",
    image:
      "https://img.freepik.com/free-photo/diverse-multi-ethnic-business-teamwork-overworking-office-meeting-room-analyzing-financial-graphs_482257-8164.jpg",
    route: "/solutions/project-management", // Defined route for Project Management
  },
];

export default function Services() {
  const navigate = useNavigate(); // Use navigate to handle routing

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: { xs: "20px", md: "40px" },
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Left Image (Quarter Circle Clip) */}
      <Box
        component="img"
        src={MG1}
        alt="Left Model Image"
        sx={{
          width: { xs: "260px", md: "500px" },
          position: "absolute",
          top: { xs: "-40px", md: "-50px" },
          left: { xs: "-40px", md: "-80px" },
          zIndex: 1,
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
          borderRadius: "100%",
        }}
      />

      {/* Title Section */}
      <Box
        pt={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "36px", md: "48px" },
            fontWeight: "bold",
            color: "#000",
            zIndex: 2,
          }}
        >
          Our
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "36px", md: "48px" },
            fontWeight: "bold",
            color: "darkred",
            marginLeft: "10px",
            zIndex: 2,
          }}
        >
          Services
        </Typography>
      </Box>

      {/* Description Section */}
      <Typography
        variant="body1"
        sx={{
          color: "#333",
          fontSize: { xs: "16px", md: "18px" },
          marginBottom: "40px",
          zIndex: 2,
          position: "relative",
        }}
      >
        Our services are designed to meet your business needs and enhance
        operational efficiency.
      </Typography>

      {/* Service Tiles Section */}
      <Grid
        container
        spacing={2}
        sx={{
          zIndex: 2,
          position: "relative",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        {services.map((service, index) => (
          <Grid item xs={12} md={2} key={index}>
            <Box
              onClick={() => navigate(service.route)} // Navigate to the defined route
              sx={{
                position: "relative",
                height: { xs: "40vh", md: "40vh" },
                width: { xs: "100%", md: "auto" },
                borderRadius: "15px",
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.04)",
                },
              }}
            >
              {/* Red fog effect */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "30%",
                  background:
                    "linear-gradient(transparent, rgba(212, 49, 38, 0.7))",
                  transition: "background 0.3s ease",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "10px",
                  "&:hover": {
                    background:
                      "linear-gradient(transparent, rgba(212, 49, 38, 1))",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "left",
                    fontSize: "22px",
                    width: "100%",
                  }}
                >
                  {service.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
