import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useParams } from "react-router-dom"; // Import useParams to get the guardian ID from the URL
import img_1 from "../../assets/guardian/guardian.jpg";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import "../../styles/Guardian/GuardianProfilePage.css";
import { grey, red } from "@mui/material/colors";
import { GuardianMenuItem } from "../../components/GuardianMenuItem"

const GuardianProfilePage = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({}));
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    nic: "",
    mobile: "",
    homeAddress: "",
    workingPlaceAddress: "",
    profession: "",
    lovedOnes: "",
  });

  // Use useParams to get the guardian ID from the URL
  const { guardianId } = useParams();

  useEffect(() => {
    // Fetch guardian details from your API using the guardian ID
    // Replace 'YOUR_API_URL' with your actual API endpoint
    fetch(`/api/v1/guardian/${guardianId}/details`)
      .then((response) => response.json())
      .then((data) => {
        setPersonalDetails(data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching guardian details:", error);
      });
  }, [guardianId]);

  return (
    <div className="guardian-profile-page">
      <Header />
      <Box height={80} />

      <Box
        sx={{
          mx: 45, // margin left and right
          my: 5, // margin top and bottom
          p: 3,
        }}
      >
        <Sidebar menuItems={GuardianMenuItem} />
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
          <Typography variant="h5" color="#05445E" sx={{ textAlign: "left" }}>
            Profile
          </Typography>

          <Grid xs={3} sx={{ p: 3 }}>
            <Grid display={"flex"} flexDirection={"column"}>
              <Grid xs={3} spacing={24}>
                <StyledBadge>
                  <Avatar
                    alt="user-image"
                    height="240"
                    src={img_1}
                    sx={{
                      width: 150,
                      height: 150,
                    }}
                  />
                </StyledBadge>
              </Grid>
              <Grid container>
                <Grid item xs={12} sx={{ my: 4 }}>
                  <Typography color="#0544E" sx={{ mx: 2 }}>
                    {personalDetails.fullName}
                  </Typography>
                </Grid>
              </Grid>
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
                  <TextField
                    disabled
                    label="Full Name"
                    id="standard-size-small"
                    value={personalDetails.fullName}
                    size="small"
                    variant="standard"
                  />
                  <TextField
                    disabled
                    label="Email"
                    id="standard-size-small"
                    value={personalDetails.email}
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
                      value={personalDetails.nic}
                      size="small"
                      variant="standard"
                    />
                    <TextField
                      disabled
                      label="Mobile Number"
                      id="standard-size-small"
                      value={personalDetails.mobile}
                      size="small"
                      variant="standard"
                    />
                  </Box>
                  <TextField
                    disabled
                    label="Home Address"
                    id="standard-size-small"
                    value={personalDetails.homeAddress}
                    size="small"
                    variant="standard"
                  />
                  <TextField
                    disabled
                    label="Profession"
                    id="standard-size-small"
                    value={personalDetails.profession}
                    size="small"
                    variant="standard"
                  />
                  <TextField
                    disabled
                    label="Working Place Address"
                    id="standard-size-small"
                    value={personalDetails.workingPlaceAddress}
                    size="small"
                    variant="standard"
                    sx={{ pb: 2 }}
                  />
                  <TextField
                    disabled
                    label="Your Loved Ones"
                    id="standard-size-small"
                    value={personalDetails.lovedOnes}
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

export default GuardianProfilePage;
