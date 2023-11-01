import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { TextField, Divider, Switch, FormControlLabel } from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import { InputBase } from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";
import { IconButton, Button } from "@mui/material";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import { GuardianMenuItem } from "../../components/GuardianMenuItem";

//import "../../styles/DoctorViewHealthTips.css";

const DoctorViewHealthTips = () => {
  const user = {
    name: "Dr. John Doe",
    profileImage: "https://via.placeholder.com/50", // Example placeholder image URL
  };

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Do more exercise",
      content:
        "Aim for at least 30 minutes of physical activity daily to boost energy, enhance mood, and improve overall well-being",
    },
    {
      id: 2,
      title: "Take your medicine on time",
      content:
        "Consistently taking prescribed medication on time is crucial for managing health conditions effectively. Set reminders, use pill organizers, or establish a routine to ensure timely doses. Adhering to your medication schedule as directed by your healthcare provider is key for optimal health management.",
    },
    {
      id: 3,
      title: "Healthy Diet",
      content:
        "Eat a balanced diet rich in fruits, vegetables, lean proteins, and whole grains to support energy, bone health, and immune function",
    },
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddPost = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, { id: posts.length + 1, ...newPost }]);
      setNewPost({ title: "", content: "" });
      setOpenModal(false); // Close modal after adding the post
    }
  };

  const handleDeletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    width: 500px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    margin: 4px;
    border-radius: 8px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
   border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };

    &:hover {
      border-color: ${blue[400]};
    }

  

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );
  return (
    <div className="HealthTip">
      <Header />
      <Box height={80} />
      {/* <Box sx={{ display: "flex" }}> */}
      <Sidebar menuItems={GuardianMenuItem} />
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box> */}
      <div>
        <Box display="flex" justifyContent="center">
          <Box width="60%" textAlign="left">
            {/* <Stack sx={6}>
                <Typography variant="h4" gutterBottom textAlign="start">
                  Health Tips
                </Typography>
              </Stack>
       */}

            <Box width="100%" maxWidth="600px" mx="auto">
              {/* <Paper
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  padding: 2,
                  marginBottom: 2,
                  height: "fit-content",
                  borderRadius: "4px",
                }}
              > */}
              <Grid container>
                <Grid xs={12} sx={{ marginBottom: "45px" }}>
                  <Typography variant="h4" gutterBottom textAlign="start">
                    Health Tips
                  </Typography>
                </Grid>

                <Grid xs={11}>
                  <InputBase
                    placeholder="Search Posts"
                    inputProps={{ "aria-label": "search posts" }}
                    onChange={handleSearch}
                    sx={{
                      width: "100%",
                      marginBottom: "20px",
                      "& .MuiInputBase-input": {
                        borderRadius: "14px",
                      },
                      "& .MuiInputBase-root": {
                        borderRadius: "14px",
                      },
                    }}
                  />
                </Grid>
                <Grid xs={1}>
                  <IconButton
                    type="submit"
                    sx={{ padding: 1 }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Grid>
              </Grid>
              {/* </Paper> */}
              <List>
                {posts
                  .filter((post) =>
                    post.title.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((post) => (
                    <Box
                      key={post.id}
                      mb={2}
                      p={2}
                      border="1px solid #ccc"
                      borderRadius="14px"
                    >
                      <Box display="flex" alignItems="flex-start">
                        <Avatar
                          alt={user.name}
                          src={user.profileImage}
                          sx={{ marginLeft: 2, p: 0, alignItems: "center" }}
                        />
                        <ListItemText
                          sx={{ marginLeft: 2, p: 0, alignItems: "center" }}
                          primary={user.name}
                        />
                      </Box>

                      <Box height={10} />

                      <Grid container>
                        <Grid xs={10} sx={{ padding: "5px 5px 5px 16px" }}>
                          {/* <Box p={2} sx={{ borderRadius: "4px", backgroundColor: "#f9f9f9" }}> */}
                          <ListItemText
                            primary={post.title}
                            secondary={post.content}
                            sx={{ borderRadius: "4px" }}
                          />
                         
                        </Grid>
                      </Grid>
                    </Box>
                  ))}
              </List>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};
export default DoctorViewHealthTips;
