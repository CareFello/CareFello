import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import { Typography, autocompleteClasses } from "@mui/material";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Divider, { dividerClasses } from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import MuiGrid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import img_1 from "../assets/guardian/guardian.jpg";
import { GuardianMenuItem } from "../components/GuardianMenuItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import "../styles/Guardian/GuardianProfilePage.css";
import { grey, red } from "@mui/material/colors";
import { ManagerMenuItem } from "../components/ManagerMenuItem";

const ManagerGuardianProfile = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({}));
  const Grid = styled(MuiGrid)(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    '& [role="separator"]': {
      margin: theme.spacing(0, 2),
    },
  }));
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "Priyanthi De Silva",
    email: "pereraDehiwala@gmail.com",
    nic: "2000120304",
    mobile: "0773485994",
    homeAddress: "No.75, School Lane, Cross Street, Dehiwala",
    workingPlaceAddress: "No.5, Ward Place, Colombo 7",
    profession: "Software Engineer",
    lovedOnes: "K.Sampath Perera, Nimali Perera",
  });

  return (
    <div className="guardian-profile-page">
      <Header />
      <Box height={80} />

      <Box
        sx={{
          // display: "flex",
          mx: 45, //margin left and right
          my: 5, //margin top and bottom
          p: 3,
        }}
      >
        <Sidebar menuItems={ManagerMenuItem} />
        <Grid
          container
          sx={{
            border: 1,
            width: 900,
            height: "85vh",
            borderColor: "grey.300",
            boxShadow: 0,
            bgcolor: "#fff",
            borderRadius: 3,
            p: 2,
          }}
        >
          {/* <Grid xs={6}>
            <Typography
              variant="h5"
              color="#05445E"
              sx={{ mx: 30, textAlign: "left" }}
            >
              Profile
            </Typography>
          </Grid> */}

          <Typography variant="h5" color="#05445E" sx={{ textAlign: "left" }}>
            Profile
          </Typography>

          <Grid xs={3} sx={{ p: 3 }}>
            <Grid display={"flex"} flexDirection={"column"}>
              <Grid
                xs={3}
                spacing={24}
                // display="flex"
                // align-items="center"
                // justify-content="center"
              >
                <StyledBadge>
                  <Avatar
                    alt="user-image"
                    height="240"
                    src={img_1}
                    sx={{
                      width: 150,
                      height: 150,
                      // display: "flex",
                      // alignItems: "center",
                      // justifyContent: "center",
                    }}
                  />
                </StyledBadge>
              </Grid>
              <Grid container  >
                <Grid item xs={12} sx={{my:4}}>
                <Typography color="#0544E" sx={{ mx: 2 }}>
                  {personalDetails.fullName}
                </Typography>
                </Grid>
                
              </Grid>
              {/* <Grid xs={12} sx={{ border: 2, m: 2 }}>
                <Typography color="#0544E" sx={{ mx: 2 }}>
                  {personalDetails.fullName}
                </Typography>
              </Grid> */}
            </Grid>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ m: 2 }} />
          <Grid xs={7}>
            <Stack display="flex" flexDirection={"row"}>
              <Box
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "50ch" },
                  m: 1,
                }}
                autoComplete="off"
              >
                <div>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "left",
                    }}
                  >
                    {/* <Typography>Full Name:</Typography>
                    <Typography>{personalDetails.fullName}</Typography> */}
                  </Box>
                  <TextField
                    disabled
                    label="Full Name"
                    id="standard-size-small"
                    defaultValue={personalDetails.fullName}
                    size="small"
                    variant="standard"
                  />
                  <TextField
                    disabled
                    label="Email"
                    id="standard-size-small"
                    defaultValue={personalDetails.email}
                    size="small"
                    variant="standard"
                  />
                  <Box
                    sx={{
                      "& .MuiTextField-root": { width: "24ch" },
                    }}
                  >
                    <TextField
                      disabled
                      label="NIC"
                      id="standard-size-small"
                      defaultValue={personalDetails.nic}
                      size="small"
                      variant="standard"
                    />
                    <TextField
                      disabled
                      label="Mobile Number"
                      id="standard-size-small"
                      defaultValue={personalDetails.mobile}
                      size="small"
                      variant="standard"
                    />
                  </Box>

                  <TextField
                    disabled
                    label="Home Address"
                    id="standard-size-small"
                    defaultValue={personalDetails.homeAddress}
                    size="small"
                    variant="standard"
                  />
                  <TextField
                    disabled
                    label="Profession"
                    id="standard-size-small"
                    defaultValue={personalDetails.profession}
                    size="small"
                    variant="standard"
                  />
                  <TextField
                    disabled
                    label="Working Place Address"
                    id="standard-size-small"
                    defaultValue={personalDetails.workingPlaceAddress}
                    size="small"
                    variant="standard"
                    sx={{ pb: 2 }}
                  />
                  <TextField
                    disabled
                    label="Your Loved Ones"
                    id="standard-size-small"
                    defaultValue={personalDetails.lovedOnes}
                    size="small"
                    variant="standard"
                    sx={{ pb: 2 }}
                  />
                 
                </div>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ManagerGuardianProfile;
