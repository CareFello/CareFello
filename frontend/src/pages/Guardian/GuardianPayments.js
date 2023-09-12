import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { GuardianMenuItem } from "../../components/GuardianMenuItem";
import Grid from "@mui/material/Grid"; // Import Material-UI Grid
import "../../styles/Guardian/GuardianPayments.css";

const GuardianPayments = () => {
  const [currency, setCurrency] = useState("LKR");
  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCVC] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log("Payment submitted");
  };

  return (
    <div className="payment">
      <Header />
      <Box height={120} />
      <Box className="payment-content">
        <Sidebar menuItems={GuardianMenuItem} />
        <main className="payment-body">

          <form onSubmit={handleSubmit}>
            <Typography variant="h5" gutterBottom>
              Payment Data
            </Typography>
            <Grid container spacing={2}> {/* Use Grid container */}
              <Grid item xs={6}> {/* Adjust width for Currency */}
                <TextField
                  label="Currency"
                  variant="outlined"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  select
                  fullWidth
                  margin="normal"
                >
                  <MenuItem value="LKR">LKR</MenuItem>
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                  {/* Add more currency options as needed */}
                </TextField>
              </Grid>
              <Grid item xs={6}> {/* Adjust width for Amount */}
                <TextField
                  label="Amount"
                  variant="outlined"
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
            </Grid>
            <TextField
              label="Card Number"
              variant="outlined"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Expiration Date"
              variant="outlined"
              type="text"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="CVC"
              variant="outlined"
              type="text"
              value={cvc}
              onChange={(e) => setCVC(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <Button className="pay-btn" variant="contained" color="primary" type="submit" fullWidth>
              Pay
            </Button>
          </form>
        </main>
      </Box>
    </div>
  );
};

export default GuardianPayments;
