// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  Box,
  MenuItem,
  Stack,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useForm } from "react-hook-form";
import HeaderPages from "../Components/HeaderPages.jsx";

const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regMobile = /^01[0-9]{1}[0-9]{8}$/;

const currencies = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

function Profile() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("DONEEEE");
    handleClick();
  };

  return (
    <Box>
      <HeaderPages title={"CREATE USER"} desc={"Create a New Profile"} />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mt: "70px",
          px: "20px",
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction={"row"} sx={{ gap: 3 }}>
          <TextField
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
            helperText={
              // eslint-disable-next-line no-extra-boolean-cast
              Boolean(errors.firstName)
                ? "This field is required & min 3 characters"
                : null
            }
            {...register("firstName", { required: true, minLength: 3 })}
            error={Boolean(errors.firstName)}
          />
          <TextField
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
            helperText={
              // eslint-disable-next-line no-extra-boolean-cast
              Boolean(errors.lastName)
                ? "This field is required & min 3 characters"
                : null
            }
            {...register("lastName", { required: true, minLength: 3 })}
            error={Boolean(errors.lastName)}
          />
        </Stack>

        <TextField
          label="Email"
          variant="filled"
          helperText={
            // eslint-disable-next-line no-extra-boolean-cast
            Boolean(errors.email)
              ? "Please provide a valid email address"
              : null
          }
          {...register("email", { required: true, pattern: regEmail })}
          error={Boolean(errors.email)}
        />

        <TextField
          label="Contact Number"
          variant="filled"
          helperText={
            // eslint-disable-next-line no-extra-boolean-cast
            Boolean(errors.number)
              ? "This field is required & min 11 Number"
              : null
          }
          {...register("number", { required: true, pattern: regMobile })}
          error={Boolean(errors.number)}
        />
        <TextField label="Address 1" variant="filled" />
        <TextField label="Address 2" variant="filled" />
        <TextField select label="Select" defaultValue="User" variant="filled">
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          type="submit"
          sx={{ width: "fit-content", ml: "auto" }}
          variant="contained"
          color="primary"
        >
          CREATE NEW USER
        </Button>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%"}}
          >
            Account Created Successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}

export default Profile;
