import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Menu,
  MenuItem,
  Box,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const services = [
  "ERP Implementation and Support Services",
  "D365BC Functional and Technical Training Program",
  "Website Development",
  "Custom App Development (Web and Mobile)",
  "Project Management Services",
  "Cloud Hosting with Dedicated Support",
];

const RequestDemoForm = ({ open, onClose }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSelectChange = (e) => {
    setFormValues({
      ...formValues,
      service: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formValues);
    onClose(); // Close the dialog after submission
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Request a Demo</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill out the form below to request a demo for the selected
          service.
        </DialogContentText>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextField
            fullWidth
            margin="dense"
            label="Name"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            required
          />
          <TextField
            fullWidth
            margin="dense"
            label="Email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleInputChange}
            required
          />
          <FormControl fullWidth margin="dense" required>
            <InputLabel>Service</InputLabel>
            <Select
              value={formValues.service}
              onChange={handleSelectChange}
              name="service"
              label="Service"
            >
              {services.map((service) => (
                <MenuItem key={service} value={service}>
                  {service}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            margin="dense"
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formValues.message}
            onChange={handleInputChange}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button
          type="submit"
          onClick={handleSubmit}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const DemoButtonWithForm = ({ text, color }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{
          backgroundColor: color ? color : "darkblue",
          color: "#fff",
          borderRadius: "25px",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
        onClick={handleOpenDialog}
      >
        {text ? text : "Request a Demo"}
        <ArrowForwardIcon />
      </Button>

      <RequestDemoForm open={dialogOpen} onClose={handleCloseDialog} />
    </>
  );
};

export default DemoButtonWithForm;
