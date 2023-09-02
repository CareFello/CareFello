import React from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Box, TextareaAutosize } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { GuardianMenuItem } from "../../components/GuardianMenuItem";
import img_4 from "../../assets/guardian/addelder.jpg";
import "../../styles/Guardian/GuardianAddElder.css";



function GuardianAddElder() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [name1, setName1] = useState("");
  const [name2, setname2] = useState("");
  const [nic, setNic] = useState("");
  const [cont, setCont] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isValidnic, setIsValidnic] = useState(true);
  const [allergyfoods, setallergyfoods] = useState("");
  const [doc1, setdoc1] = useState("");
  const [doc2, setdoc2] = useState("");
  const [desease, setdesease] = useState("");
  const [doctordetails, setdoctordetails] = useState("");
  const [selectedPdf, setSelectedPdf] = useState(null);
  const handlePdfChange = (event) => {
    const file = event.target.files[0];
    setSelectedPdf(file);
  };

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8085/api/v1/doctor/save", {
        name1: name1,
        name2: name2,
        nic: nic,
        cont: cont,
        age: age,
        gender: gender,
        allergyfoods: allergyfoods,
        desease: desease,
        doc1: doc1,
        doc2: doc2,
        doctordetails: doctordetails,
      });
      alert("Your request for add elder is successfully sent to Manager");
      window.location.reload();
    } catch (err) {
      alert(err);
    }
  }
  return (
    <div>
      <Header />
      <form>
        <Header />
        <Box height={120} />
        <Box sx={{ display: "flex" }}>
          <Sidebar menuItems={GuardianMenuItem} />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Stack spacing={9} direction={"row"}>
                  <Card
                    sx={{
                      display: "flex",
                      minWidth: 100 + "%",
                      height: 100 + "%",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h4">
                          Add Your Loved One
                        </Typography>
                        <br />
                        <div>
                          <TextField
                            required
                            id="outlined-required"
                            label="First name"
                            sx={{ m: 1, width: "25ch" }}
                            value={name1}
                            onChange={(event) => {
                              setName1(event.target.value);
                            }}
                          />
                          <TextField
                            required
                            id="outlined-required"
                            label="Last name"
                            sx={{ m: 1, width: "25ch" }}
                            value={name2}
                            onChange={(event) => {
                              setname2(event.target.value);
                            }}
                          />

                          <TextField
                            required
                            id="outlined-required"
                            label={
                              isValidnic ? (
                                "NIC No"
                              ) : (
                                <p style={{ color: "red" }}>Invalid NIC No</p>
                              )
                            }
                            sx={{ m: 1, width: "25ch" }}
                            value={nic}
                            onChange={(event) => {
                              setNic(event.target.value);
                              const inputnic = event.target.value;
                              const nicPattern = /^\d{12}$/;
                              setIsValidnic(nicPattern.test(inputnic));
                            }}
                            style={{
                              borderColor: isValid ? "green" : "red",
                            }}
                          />
                          <TextField
                            id="outlined-basic"
                            label="Age"
                            type="number"
                            sx={{ m: 1, width: "25ch" }}
                            value={age}
                            onChange={(event) => {
                              setAge(event.target.value);
                            }}
                          />
                          <TextField
                            required
                            id="outlined-required"
                            label="Mobile No"
                            sx={{ m: 1, width: "25ch" }}
                            value={cont}
                            onChange={(event) => {
                              setCont(event.target.value);
                            }}
                          />
                          <TextField
                            required
                            id="outlined-required"
                            label="Working Place Address"
                            sx={{ m: 1, width: "25ch" }}
                          />

                          

                          <div
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                            }}
                          >
                            <FormControl>
                              <FormLabel
                                className="label-gender"
                                id="demo-row-radio-buttons-group-label"
                              >
                                Gender
                              </FormLabel>

                              <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                              >
                                <FormControlLabel
                                  value="female"
                                  control={<Radio />}
                                  label="Female"
                                />
                                <FormControlLabel
                                  value="male"
                                  control={<Radio />}
                                  label="Male"
                                />
                                <FormControlLabel
                                  value="other"
                                  control={<Radio />}
                                  label="Other"
                                />
                              </RadioGroup>
                            </FormControl>
                          </div>
                          <br />
                          <div>
                          <Typography component="div" variant="h4" align="left">
                          Medical History
                        </Typography>
                        <br />
                        <Box display="flex" justifyContent="flex-start">
                        <TextField
                            required
                            id="outlined-required"
                            label="Desease"
                            sx={{ m: 1, width: "35ch",}}
                            value={desease}
                            onChange={(event) => {
                              setdesease(event.target.value);
                            }}
                          />

                    <TextField
                            required
                            id="outlined-required"
                            label="Doctor Name"
                            sx={{ m: 1, width: "35ch" }}
                            value={doc1}
                            onChange={(event) => {
                              setdoc1(event.target.value);
                            }}
                          />
                         </Box>
                       <div className="medi_detail">
                        <TextField
                            required
                            id="outlined-required"
                            label="Medical Details"
                            sx={{ m: 1, width: "85ch",height:"15ch", }}
                            multiline // Enable multiline input
                            rows={4} // Specify the number of rows (adjust as needed)
                            variant="outlined"
                            fullWidth // Take up the full width of the container
                            value={doctordetails}
                            onChange={(event) => {
                              setdoctordetails(event.target.value);
                            }}
                          />
                           <br />
        <input
          accept=".pdf"
          id="pdf-upload-input"
          type="file"
          style={{ display: 'none' }}
          onChange={handlePdfChange}
        />
        <label htmlFor="pdf-upload-input">
          <Button
            variant="contained"
            component="span"
            sx={{ m: 1, width: "85ch" }}
          >
            Upload PDF Document
          </Button>
        </label>
        {selectedPdf && (
          <div>
            <p>Selected PDF: {selectedPdf.name}</p>
          </div>
        )}
      </div>
                        </div>
                          </div>

                          <div>
                          <Typography component="div" variant="h4" align="left">
                          Allergies
                        </Typography>
                        <br />
                      
                        <TextField
                            required
                            id="outlined-required"
                            label="Allergies Food"
                            sx={{ m: 1, width: "85ch",height:"15ch", }}
                            multiline // Enable multiline input
                            rows={4} // Specify the number of rows (adjust as needed)
                            variant="outlined"
                            fullWidth
                            value={allergyfoods}
                            onChange={(event) => {
                              setallergyfoods(event.target.value);
                            }}
                          />

                      
                          </div>

                          <br />
                          <Button
                            variant="contained"
                            sx={{ m: 1, width: "30ch" }}
                            onClick={save}
                          >
                            Register
                          </Button>
                     
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      ></Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 40 + "%" }}
                      image={img_4}
                      alt="Live from space album cover"
                    />
                  </Card>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </form>
    </div>
  );
}

export default GuardianAddElder;
