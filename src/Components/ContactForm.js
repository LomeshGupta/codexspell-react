import React, { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactFormCard = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    from_name: "",
    email: "",
    phone: "",
    message: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === "subscribe" ? checked : value,
      ...(name === "name" && { from_name: value }), // Synchronize from_name with name
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7hf495s",
        "template_sb4h627",
        form.current,
        "1iH__A9UU69Je6fGy"
      )
      .then(
        () => {
          toast.success("Form Submitted Successfully!");
          setFormData({
            name: "",
            from_name: "",
            email: "",
            phone: "",
            message: "",
            subscribe: false,
          });
        },
        (error) => {
          toast.error("Failed to submit the form. Please try again.");
          console.error("Form submission error: ", error.text);
        }
      );
  };

  return (
    <Box
      sx={{
        paddingTop: "8%",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginTop: 10,
        backgroundColor: "#fff",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
      {/* <Bubbles /> */}
      <CardContent
        sx={{
          marginLeft: "5%",
          "@media (max-width: 600px)": {
            paddingTop: "10%",
          },
        }}
      >
        <Typography variant="h4" gutterBottom>
          Send a{" "}
          <spna style={{ color: "#996515", fontWeight: "500" }}>Message</spna>
        </Typography>
        <form ref={form} onSubmit={handleSubmit}>
          <Grid container spacing={1} padding="20px">
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="name"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
              />
              <input
                type="hidden"
                name="from_name"
                value={formData.from_name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="message"
                label="Tell us how we can help (Message)"
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.subscribe}
                    onChange={handleChange}
                    name="subscribe"
                    color="primary"
                  />
                }
                label="Free Tech related information for businesses sent every month? Sign me up!"
              />
            </Grid>
          </Grid>
          <CardActions>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "darkred",
                "&:hover": {
                  backgroundColor: "darkblue",
                },
                fontSize: "17px",
                width: "30%",
                margin: "40px",
                "@media (max-width: 600px)": {
                  width: "70%",
                },
              }}
            >
              Talk to Us
            </Button>
          </CardActions>
        </form>
      </CardContent>
      <CardContent sx={{ marginRight: "5%" }}>
        <Typography variant="h4" gutterBottom>
          Reach Out
        </Typography>
        <br />
        <Typography variant="h6" gutterBottom>
          If you made it this far, you’re our type of person. Let’s talk.
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          Email: Contact@codexspell.com
        </Typography>
        <Typography variant="body1" gutterBottom>
          Phone: 8527374584
        </Typography>
        <Typography variant="h5" gutterBottom>
          Address
        </Typography>
        <Typography variant="body1" gutterBottom>
          Faridabad, 121004
        </Typography>
      </CardContent>
      <ToastContainer />
    </Box>
  );
};

export default ContactFormCard;
