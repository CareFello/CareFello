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
// import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
// import { styled } from "@mui/system";
import {DoctorMenuItem } from "../../components/DoctorMenuItem";

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
  // const blue = {
  //   100: "#DAECFF",
  //   200: "#b6daff",
  //   400: "#3399FF",
  //   500: "#007FFF",
  //   600: "#0072E5",
  //   900: "#003A75",
  // };

  // const grey = {
  //   50: "#F3F6F9",
  //   100: "#E5EAF2",
  //   200: "#DAE2ED",
  //   300: "#C7D0DD",
  //   400: "#B0B8C4",
  //   500: "#9DA8B7",
  //   600: "#6B7A90",
  //   700: "#434D5B",
  //   800: "#303740",
  //   900: "#1C2025",
  // };

  // const Textarea = styled(BaseTextareaAutosize)(
  //   ({ theme }) => `
  //   width: 500px;
  //   font-family: IBM Plex Sans, sans-serif;
  //   font-size: 0.875rem;
  //   font-weight: 400;
  //   line-height: 1.5;
  //   padding: 8px 12px;
  //   margin: 4px;
  //   border-radius: 8px;
  //   color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  //   background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};

  //   box-shadow: 0px 2px 2px ${
  //     theme.palette.mode === "dark" ? grey[900] : grey[50]
  //   };

  //   &:hover {
  //     border-color: ${blue[400]};
  //   }

  //   // firefox
  //   &:focus-visible {
  //     outline: 0;
  //   }
  // `
  // );
  return (
    <div className="HealthTip">
      <Header />
      <Box height={80} />
      {/* <Box sx={{ display: "flex" }}> */}
      <Sidebar menuItems={DoctorMenuItem} />
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box> */}
      <div>
        <Box display="flex" justifyContent="center">
          <Box width="60%" textAlign="left">
            <Box width="100%" maxWidth="600px" mx="auto">
              <Grid container>
                <Grid xs={12} sx={{ marginBottom: "45px" }}>
                  <Typography variant="h3" gutterBottom textAlign="start">
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
                          {/* </Box> */}
                        </Grid>
                        <Grid
                          xs={2}
                          justifyContent="center"
                          sx={{ padding: 4 }}
                        >
                          <IconButton
                            onClick={() => handleDeletePost(post.id)}
                            aria-label="delete"
                            sx={{ margin: "auto" }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Box>
                  ))}
              </List>
            </Box>
            <Box
              sx={{ position: "fixed", bottom: 80, right: 200, zIndex: 1000 }}
            >
              <Fab
                color="primary"
                aria-label="add"
                onClick={() => setOpenModal(true)}
              >
                <AddIcon />
              </Fab>
            </Box>

            {/* Modal for adding new post */}
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 600,
                  height: 700,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h4" gutterBottom textAlign="center">
                  Add Health Tips
                </Typography>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                  }}
                ></Box>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{ marginBottom: "20px", mt: 4 }}
                >
                  <Avatar
                    alt={user.name}
                    src={user.profileImage}
                    sx={{ marginRight: 2 }}
                  />
                  <Typography>{user.name}</Typography>
                </Box>
                {/* <Box
                  // display="flex"
                  alignItems="center"
                  
                  sx={{ "& .MuiTextField-root": { m: 1, width: "50ch",backgroundColor:"red" } }}
                > */}
                <Grid container>
                  {/* <Grid container spacing={2}> */}
                  <Grid item xs={12} sx={{ marginTop: 3, marginBottom: 3 }}>
                    {/* <TextField
                          label="Topic"
                          value={newPost.title}
                          onChange={(e) =>
                            setNewPost({ ...newPost, title: e.target.value })
                          }
                          fullWidth
                        /> */}
                    <Typography variant="h8">Topic</Typography>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      value={newPost.title}
                      onChange={(e) =>
                        setNewPost({ ...newPost, title: e.target.value })
                      }
                      sx={{
                        "& .MuiOutlinedInput-multiline": {
                          border: "none", // Remove the border from the multiline input
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: 3, marginBottom: 3 }}>
                    {/* <TextField
                          label="Health Tip Description"
                          value={newPost.content}
                          onChange={(e) =>
                            setNewPost({ ...newPost, content: e.target.value })
                          }
                          multiline
                          rows={10}
                          fullWidth
                        /> */}
                    <Typography variant="h8">Description</Typography>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      value={newPost.content}
                      onChange={(e) =>
                        setNewPost({ ...newPost, content: e.target.value })
                      }
                      multiline
                      rows={6}
                      sx={{
                        "& .MuiOutlinedInput-multiline": {
                          border: "none", // Remove the border from the multiline input
                        },
                        "& .MuiOutlinedInput-outlined": {
                          border: "none", // Remove the border from the multiline input
                        },
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderWidth: "1px", // Set the border width to 1px
                        },
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "none", // Remove the border when the input is focused
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "none", // Remove the border when hovered
                          },
                          border: "none", // Remove the default border
                        },
                      }}
                    

                    />
                  </Grid>

                  {/* </G//rid> */}
                  <Grid xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleAddPost}
                      sx={{ mt: 5 }} // Add margin top to space out the button
                      fullWidth
                    >
                      Post
                    </Button>
                  </Grid>
                </Grid>
                {/* </Box> */}
              </Box>
            </Modal>
            {/* <Box width="60%" textAlign="center">
              <TextField
                label="Title"
                value={newPost.title}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Content"
                value={newPost.content}
                onChange={(e) =>
                  setNewPost({ ...newPost, content: e.target.value })
                }
                multiline
                rows={4}
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddPost}
              >
                Add Post
              </Button>
            </Box> */}
          </Box>
        </Box>
      </div>
    </div>
  );
};
export default DoctorViewHealthTips;
