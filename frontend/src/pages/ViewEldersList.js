// ViewEldersList.js
import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import { ManagerMenuItem } from "../components/ManagerMenuItem";
import "../styles/ViewEldersList.css";

import img_1 from "../assets/E1.jpg";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CreditCardIcon from "@mui/icons-material/CreditCard";

export default function ViewEldersList() {
    // Sample data for elders (replace this with your actual data)
    const eldersData = [
        {
            id: 1,
            name: "Elder 1",
            image: img_1,
            guardianName: "Guardian 1",
            age: 75,
            nicNo: "12345-67890",
        },

        {
            id: 2,
            name: "Elder 2",
            image: img_1,
            guardianName: "Guardian 2",
            age: 75,
            nicNo: "12345-67890",
        },
        // Add more elders as needed
    ];

    return (
        <div className="elders-list">
            <Header />
            <Box height={60} />
            <Box className="elders-list-content">
                <Sidebar menuItems={ManagerMenuItem} />
                <main className="elders-list-body">
                    <h2>Elders</h2>

                    <div className="search-bar">
                        {/* Add your search bar component here */}
                        <TextField
                            // label="Search Elders"
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon className="search-icon" />
                                    </InputAdornment>
                                ),
                            }}
                            className="search-input"
                            // value={searchQuery}
                            // onChange={handleSearchChange}
                        />
                    </div>
                    <div className="elders-cards">
                        {eldersData.map((elder) => (
                            <div className="elder-card" key={elder.id}>
                                <div className="elder-card-upper">
                                    <img
                                        src={elder.image}
                                        alt={elder.name}
                                        className="elder-image"
                                    />
                                    <a href={`/elder-profile/${elder.id}`} className="elder-name">
                                        {elder.name}
                                    </a>
                                </div>
                                <div className="elder-card-lower">
                                    <div className="icon-label">
                                        <span className="material-icons"><PersonIcon /></span>
                                        <span className="label">Guardian : </span>
                                        <a href={`/guardian-profile/${elder.id}`} className="guardianName-link">
                                            {elder.guardianName}
                                        </a>
                                    </div>
                                    <div className="icon-label">
                                        <span className="material-icons"><AccessTimeIcon /></span>
                                        <span className="label">Age : </span>
                                        {elder.age}
                                    </div>
                                    <div className="icon-label">
                                        <span className="material-icons"><CreditCardIcon /></span>
                                        <span className="label">NIC No : </span>
                                        {elder.nicNo}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </Box>
        </div>
    );
}
