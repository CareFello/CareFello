import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Box from "@mui/material/Box";
import { GuardianMenuItem } from "../../components/GuardianMenuItem";
const GuardianPayments = () => {

    return(
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
          Payments
        </Box>
    </div>
    )
}

export default GuardianPayments