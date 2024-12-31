import React, { useEffect, useRef, useState, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import bg1 from "../Assets/rie9.jpg";
import demoImage from "../Assets/telemetry.png";
import DemoButtonWithForm from "./DemoButtonWithForm";

const HeroSection = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const contentRef = useRef(null);

  // Debounced scroll handler to reduce the number of updates
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    // Update scale based on scroll position
    const newScale = Math.max(0.5, 1 - scrollY / 3000);
    setScale(newScale);
  }, []);

  useEffect(() => {
    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [handleScroll]);

  // Intersection Observer for visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        transform: `scale(${scale})`,
        boxShadow: scale < 0.95 ? "0px 2px 15px rgba(0, 0, 0, 0.1)" : "none",
        borderRadius: scale < 0.98 ? "5%" : "0",
        overflow: "hidden", // Ensure content respects the borderRadius
        transition:
          "transform 0.6s ease-in-out, box-shadow 0.3s ease-in-out, border-radius 0.6s ease-in-out", // Smooth transitions
        backgroundColor: "black",
        width: "100%", // Ensure Box has a defined width
        height: "auto", // Ensure Box has a defined height
      }}
    >
      <Box
        sx={{
          mb: 8,
          position: "relative",
          height: "100%",
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "left",
          color: "#fff",
          textAlign: "left",
          fontFamily: "Inter, sans-serif",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "blur(2px)",
            zIndex: 1,
            transition: "backdrop-filter 0.3s ease-in-out", // Smooth backdrop filter transition
          },
        }}
      >
        <Box
          ref={contentRef}
          className={isVisible ? "fade-in" : ""}
          sx={{
            zIndex: 2,
            maxWidth: "800px",
            padding: "5%",
            paddingTop: "160px",
            transition: "transform 0.2s ease-in-out", // Smooth content transitions
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "700",
              fontSize: { xs: "2.4rem", md: "4rem" },
              marginBottom: "20px",
              letterSpacing: "0.05em",
              color: "lightgreen",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
              fontFamily: "Inter, sans-serif",
              transition: "font-size 0.3s ease-in-out, color 0.3s ease-in-out", // Smooth text transitions
            }}
          >
            Our Craft, <br /> Like a Spell.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              marginBottom: "40px",
              color: "darkgrey",
              fontFamily: "Inter, sans-serif",
              transition: "font-size 0.3s ease-in-out, color 0.3s ease-in-out", // Smooth text transitions
            }}
          >
            Our craft is more than just development—it's the magic that brings
            your ideas to life. We create bespoke websites and mobile
            applications that not only enhance your brand but also drive
            innovation. In addition to our expertise in web and app development,
            we offer powerful CRM solutions, along with Microsoft Dynamics 365
            implementation, support, and training. Let us work with you to
            conjure up the perfect solution and help you succeed in a rapidly
            changing world.
          </Typography>
          <DemoButtonWithForm color="darkred" />
        </Box>

        <Box
          sx={{
            zIndex: 2,
            maxWidth: "800px",
            display: { xs: "none", sm: "block" },
            transition: "opacity 0.3s ease-in-out", // Smooth fade-in for image
          }}
        >
          <img
            src={demoImage}
            alt="Demo"
            style={{
              marginTop: "0px",
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
});

export default HeroSection;
