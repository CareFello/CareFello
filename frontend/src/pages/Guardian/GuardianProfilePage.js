import React, { useState } from "react";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { GuardianMenuItem } from "../../components/GuardianMenuItem";
import "../../styles/Guardian/GuardianProfilePage.css";
import img_user from "../../assets/guardian/guardian.jpg";
import img_camera from "../../assets/guardian/cam1.svg";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Theme } from "@mui/material";
import { createTheme } from "@mui/material";
import Container from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MuiGrid from "@mui/material/Grid";
import { Typography, autocompleteClasses } from "@mui/material";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Divider, { dividerClasses } from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { grey, red } from "@mui/material/colors";
import axios from "axios";
// import { NextLinkComposed } from '../../src/Link';

const GuardianProfilePage = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({}));
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 20,
    height: 20,
    border: `2px solid ${theme.palette.background.paper}`,
    
  }));
  const Grid = styled(MuiGrid)(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    '& [role="separator"]': {
      margin: theme.spacing(0, 2),
    },
  }));
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "Priyanthi",
    lastName: "De Silva",
    email: "pereraDehiwala@gmail.com",
    nic: "2000120304",
    mobile: "0773485994",
    homeAddress: "No.75, School Lane, Cross Street, Dehiwala",
    workingPlaceAddress: "No.5, Ward Place, Colombo 7",
    profession: "Software Engineer",
    lovedOnes: "K.Sampath Perera, Nimali Perera",
  });
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [cont, setCont] = useState("");
  const [profession, setPro] = useState("");
  const [haddress, setHaddress] = useState("");
  const [waddress, setWaddress] = useState("");
  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/guardian/addGuardian", {
        fname: fname,
        lname: lname,
        cont: cont,
        profession: profession,
        haddress: haddress,
        waddress: waddress,
        password: password,
      });
      alert("Your Profile Updated is Successful");
      window.location.reload();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="guardian-profile-page">
      <Header />
      <Box height={80} />

      <Box
        sx={{
          mx: 45, //margin left and right
        }}
      >
        <Sidebar menuItems={GuardianMenuItem} />
        <Grid
          container
          sx={{
            // width: 900,
            // height: "100vh",
            bgcolor: "#fff",
            display: "flex",
            // flexDirection: "row",
            //  justifyContent: "center",
            border: 1,
          }}
        >
          <Grid xs={3} sx={{ p: 3 }}>
            {/* this make avatar and others to list down alignment */}
            <Grid
              container
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                color="#05445E"
                sx={{ textAlign: "left" }}
              >
                Profile
              </Typography>
              <Grid
                xs={3}
                spacing={24}
                sx={{ mt: 4 }}
                display="flex"
                // align-items="center"
                justify-content="center"
              >
                <div
                  style={
                    {
                      // display: "flex",
                      // flexDirection: "row",
                      // justifyContent: "center",
                    }
                  }
                >
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    badgeContent={
                      <SmallAvatar
                        alt="edit icon"
                        src={img_camera}
                        sx={{
                          width: 40,
                          height:40,
                        }}
                        
                      />
                    }
                  >
                   <Avatar
                      alt="user-image"
                      height="240"
                      src={img_user}
                      sx={{
                        width: 150,
                        height: 150,
                      }}
                     
                    />
                  </Badge>

                  {/* <StyledBadge>
                    <Avatar
                      alt="user-image"
                      height="240"
                      src={img_1}
                      sx={{
                        width: 150,
                        height: 150,
                      }}
                     
                    />
                    <ModeEditIcon/>
                  </StyledBadge> */}
                </div>
              </Grid>
              {/* <Grid container>
                <Grid item xs={12} sx={{ my: 4 }}></Grid>
              </Grid> */}
              <Grid xs={7} sx={{ mt: 4 }}>
                <Stack display="flex" flexDirection={"row"}>
                  <Box
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "50ch" },
                      m: 1,
                    }}
                  >
                    <div>
                      <Box
                        sx={{
                          "& .MuiTextField-root": { width: "24ch" },
                        }}
                      >
                        <TextField
                          label="First Name"
                          id="outlined-size-small"
                          defaultValue={personalDetails.firstName}
                          size="small"
                          sx={{ outline: "none" }}
                        />
                        <TextField
                          autoFocus
                          label="Last Name"
                          id="outlined-size-small"
                          defaultValue={personalDetails.lastName}
                          size="small"
                          sx={{ outline: "none" }}
                        />
                      </Box>
                      <TextField
                        disabled
                        label="Email"
                        id="outlined-size-small"
                        defaultValue={personalDetails.email}
                        size="small"
                      />
                      <Box
                        sx={{
                          // "& .MuiTextField-root": { width: "24ch" },
                          width: "24ch",
                        }}
                      >
                        <TextField
                          disabled
                          label="NIC"
                          id="outlined-size-small"
                          defaultValue={personalDetails.nic}
                          size="small"
                        />
                        <TextField
                          label="Mobile Number"
                          id="outlined-size-small"
                          defaultValue={personalDetails.mobile}
                          size="small"
                        />
                      </Box>

                      <TextField
                        label="Home Address"
                        id="outlined-size-small"
                        defaultValue={personalDetails.homeAddress}
                        size="small"
                      />
                      <TextField
                        label="Profession"
                        id="outlined-size-small"
                        defaultValue={personalDetails.profession}
                        size="small"
                      />

                      <TextField
                        label="Working Place Address"
                        id="outlined-size-small"
                        defaultValue={personalDetails.workingPlaceAddress}
                        size="small"
                      />
                      <TextField
                        disabled
                        label="Your Loved Ones"
                        id="outlined-size-small"
                        defaultValue={personalDetails.lovedOnes}
                        size="small"
                        sx={{ pb: 2 }}
                      />
                    </div>
                    <Button
                      onClick={save}
                      variant="contained"
                      sx={{
                        m: 1,
                        width: "10ch",
                        height: "50px",
                        display: "flex",
                        justifyContent: "flex-start",
                        backgroundColor: " #05445E",
                        marginTop: "20px",
                        "&:hover": {
                          backgroundColor: "#189AB4", // Change this color to your desired hover color
                        },
                      }}
                    >
                      <Typography sx={{ alignContent: "center" }}>
                        Save
                      </Typography>
                    </Button>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Divider orientation="vertical" flexItem sx={{ m: 2 }} /> */}
      </Box>
    </div>
  );
};

export default GuardianProfilePage;
