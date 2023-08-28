import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
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
import img_1 from "../../assets/guardian/guardian.jpg";
import { GuardianMenuItem } from "../../components/GuardianMenuItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import "../../styles/Guardian/GuardianProfilePage.css";
import { grey, red } from "@mui/material/colors";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";




 

// //objects
// const blue = {
//   100: '#DAECFF',
//   200: '#80BFFF',
//   400: '#3399FF',
//   500: '#007FFF',
//   600: '#0072E5',
// };

// const grey = {
//   50: '#F3F6F9',
//   100: '#E7EBF0',
//   200: '#E0E3E7',
//   300: '#CDD2D7',
//   400: '#B2BAC2',
//   500: '#A0AAB4',
//   600: '#6F7E8C',
//   700: '#3E5060',
//   800: '#2D3843',
//   900: '#1A2027',
// };

// const StyledInputElement = styled('input')(
//   ({ theme }) => `
//   width: 320px;
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
//   font-weight: 400;
//   line-height: 1.5;
//   padding: 8px 12px;
//   border-radius: 8px;
//   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//   box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

//   &:hover {
//     border-color: ${blue[400]};
//   }

//   &:focus {
//     border-color: ${blue[400]};
//     box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
//   }

//   // firefox
//   &:focus-visible {
//     outline: 0;
//   }
// `,
// );


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const EditGuardianProfile = () => {
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
    lovedOnes: "K.S.Perera",
  });
  //tabs
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Sidebar menuItems={GuardianMenuItem} />
        <Grid
          container
          sx={{
            border: 1,
            width: 900,
            // height: "100%",
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

          <Grid xs={3} sx={{ border: 2, p: 2 }}>
            <Grid display={"flex"} flexDirection={"column"}>
              <Grid xs={3}>
                <StyledBadge>
                  <Avatar
                    alt="user-image"
                    height="240"
                    src={img_1}
                    sx={{ width: 150, height: 150 }}
                  />
                </StyledBadge>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} sx={{ border: 2, m: 2 }}>
            <Typography color="#05444E" sx={{ m: 2 }}>
              {personalDetails.fullName}
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                
              }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ m: 3, borderRight: 1, borderColor: "divider" }}
              >
                <Tab label="Profile" {...a11yProps(0)} />
                <Tab label="Change Profile Photo" {...a11yProps(1)} />
                <Tab label="Change Password" {...a11yProps(2)} />
                <Tab label=" Delete Account" {...a11yProps(3)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                Profile
                <Stack display="flex" flexDirection={"row"}>
                  <Box
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "50ch" },
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
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          p: 2,
                        }}
                      >
                        <Button variant="outlined" size="medium">
                          Edit Profile
                        </Button>
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
                    </div>
                  </Box>
                </Stack>
                {/*  */}
              </TabPanel>
              <TabPanel value={value} index={1}>
                Change Profile Photo
              </TabPanel>
              <TabPanel value={value} index={2}>
                Change Password
              </TabPanel>
              <TabPanel value={value} index={3}>
                Delete Account
              </TabPanel>
            </Box>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ m: 2 }} />
          {/* <Grid xs={7}>
            <Stack display="flex" flexDirection={"row"}>
              <Box
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "50ch" },
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
                  ></Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      p: 2,
                    }}
                  >
                    <Button variant="outlined" size="medium">
                      Edit Profile
                    </Button>
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
                </div>
              </Box>
            </Stack>
          </Grid> */}
        </Grid>
      </Box>
    </div>
  );
};

export default EditGuardianProfile


  /* <TextField
                    disabled
                    label="Working Place Address"
                    id="outlined-size-small"
                    defaultValue={personalDetails.workingPlaceAddresse}
                    size="small"
                  />
                  <TextField
                    disabled
                    label="Email"
                    id="outlined-size-small"
                    defaultValue={personalDetails.email}
                    size="small"
                  />
                  <Box
                    sx={{
                      "& .MuiTextField-root": { width: "24ch" },
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
                      disabled
                      label="Mobile Number"
                      id="outlined-size-small"
                      defaultValue={personalDetails.mobile}
                      size="small"
                    />
                  </Box>
                  <TextField
                    disabled
                    label="Home Address"
                    id="outlined-size-small"
                    defaultValue={personalDetails.homeAddress}
                    size="small"
                  />
                  <TextField
                    disabled
                    label="Profession"
                    id="outlined-size-small"
                    defaultValue={personalDetails.profession}
                    size="small"
                  />
                  <TextField
                    disabled
                    label="Working Place Address"
                    id="outlined-size-small"
                    defaultValue={personalDetails.workingPlaceAddress}
                    size="small"
                  /> */
