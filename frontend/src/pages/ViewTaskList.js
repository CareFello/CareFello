import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import { blueGrey } from "@mui/material/colors";
import { DoctorMenuItem } from "../components/DoctorMenuItem";
import { PieChart } from "@mui/x-charts/PieChart";
import Grid from "@mui/material/Grid";
import "../styles/ViewAssignedElders.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img_1 from "../assets/E1.jpg";
import img_2 from "../assets/E2.jpg";
import img_5 from "../assets/E5.jpg";
import img_3 from "../assets/E3.jpg";

export default function App() {
  const [active, setActive] = useState("tab1");

  const handleClick = (value) => {
    if (value === active) {
      return;
    }

    setActive(value);
  };

  return (
    <div
      className="Elders"
      style={{ backgroundColor: "#F9FFFE", minHeight: "100vh" }}
    >
      <Header />
      <Box height={80} />
      <Box sx={{ display: "flex" }}>
        <Sidebar menuItems={DoctorMenuItem} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 3,
          }}
        >
          <div
            className="topic_1"
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <h4>Tasks you have to complete</h4>
          </div>
              
               
                        <MDBCardBody className="p-5">
                          <MDBTabs className="mb-4 pb-2">
                            <MDBTabsItem>
                              <MDBTabsLink
                                onClick={() => handleClick("tab1")}
                                active={active === "tab1"}
                              >
                                All
                              </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                              <MDBTabsLink
                                onClick={() => handleClick("tab2")}
                                active={active === "tab2"}
                              >
                                Active
                              </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                              <MDBTabsLink
                                onClick={() => handleClick("tab3")}
                                active={active === "tab3"}
                              >
                                Completed
                              </MDBTabsLink>
                            </MDBTabsItem>
                          </MDBTabs>
                          <MDBTabsContent>
                            <MDBTabsPane show={active === "tab1"}>
                              <MDBListGroup className="mb-0">
                                <MDBListGroupItem
                                  className=" d-flex align-items-center border-0 mb-2 rounded"
                                  style={{ backgroundColor: "#f4f6f7" }}
                                >
                                  {" "}
                                  <MDBCheckbox
                                    name="flexCheck"
                                    value=""
                                    id="flexCheck"
                                    className="me-3"
                                    defaultChecked
                                  />
                                  <s>Cras justo odio</s>
                                </MDBListGroupItem>
                                <MDBListGroupItem
                                  className=" d-flex align-items-center border-0 mb-2 rounded"
                                  style={{ backgroundColor: "#f4f6f7" }}
                                >
                                  {" "}
                                  <MDBCheckbox
                                    name="flexCheck"
                                    value=""
                                    id="flexCheck"
                                    className="me-3"
                                    defaultChecked
                                  />
                                  <s>Dapibus ac facilisis in</s>
                                </MDBListGroupItem>
                                <MDBListGroupItem
                                  className=" d-flex align-items-center border-0 mb-2 rounded"
                                  style={{ backgroundColor: "#f4f6f7" }}
                                >
                                  {" "}
                                  <MDBCheckbox
                                    name="flexCheck"
                                    value=""
                                    id="flexCheck"
                                    className="me-3"
                                  />
                                  Morbi leo risus
                                </MDBListGroupItem>
                                <MDBListGroupItem
                                  className=" d-flex align-items-center border-0 mb-2 rounded"
                                  style={{ backgroundColor: "#f4f6f7" }}
                                >
                                  {" "}
                                  <MDBCheckbox
                                    name="flexCheck"
                                    value=""
                                    id="flexCheck"
                                    className="me-3"
                                  />
                                  Porta ac consectetur ac
                                </MDBListGroupItem>
                                <MDBListGroupItem
                                  className=" d-flex align-items-center border-0 mb-2 rounded"
                                  style={{ backgroundColor: "#f4f6f7" }}
                                >
                                  {" "}
                                  <MDBCheckbox
                                    name="flexCheck"
                                    value=""
                                    id="flexCheck"
                                    className="me-3"
                                  />
                                  Vestibulum at eros
                                </MDBListGroupItem>
                              </MDBListGroup>
                            </MDBTabsPane>
                            <MDBTabsPane show={active === "tab2"}>
                              <MDBListGroup className="mb-0">
                                <MDBListGroupItem
                                  className=" d-flex align-items-center border-0 mb-2 rounded"
                                  style={{ backgroundColor: "#f4f6f7" }}
                                >
                                  {" "}
                                  <MDBCheckbox
                                    name="flexCheck"
                                    value=""
                                    id="flexCheck"
                                    className="me-3"
                                  />
                                  Morbi leo risus
                                </MDBListGroupItem>
                                <MDBListGroupItem
                                  className=" d-flex align-items-center border-0 mb-2 rounded"
                                  style={{ backgroundColor: "#f4f6f7" }}
                                >
                                  {" "}
                                  <MDBCheckbox
                                    name="flexCheck"
                                    value=""
                                    id="flexCheck"
                                    className="me-3"
                                  />
                                  Porta ac consectetur ac
                                </MDBListGroupItem>
                                <MDBListGroupItem
                                  className=" d-flex align-items-center border-0 mb-2 rounded"
                                  style={{ backgroundColor: "#f4f6f7" }}
                                >
                                  {" "}
                                  <MDBCheckbox
                                    name="flexCheck"
                                    value=""
                                    id="flexCheck"
                                    className="me-3"
                                  />
                                  Vestibulum at eros
                                </MDBListGroupItem>
                              </MDBListGroup>
                            </MDBTabsPane>
                            <MDBTabsPane show={active === "tab3"}>
                              <MDBListGroup className="mb-0">
                                <MDBListGroupItem
                                  className=" d-flex align-items-center border-0 mb-2 rounded"
                                  style={{ backgroundColor: "#f4f6f7" }}
                                >
                                  {" "}
                                  <MDBCheckbox
                                    name="flexCheck"
                                    value=""
                                    id="flexCheck"
                                    className="me-3"
                                    defaultChecked
                                  />
                                  <s>Cras justo odio</s>
                                </MDBListGroupItem>
                                <MDBListGroupItem
                                  className=" d-flex align-items-center border-0 mb-2 rounded"
                                  style={{ backgroundColor: "#f4f6f7" }}
                                >
                                  {" "}
                                  <MDBCheckbox
                                    name="flexCheck"
                                    value=""
                                    id="flexCheck"
                                    className="me-3"
                                    defaultChecked
                                  />
                                  <s>Dapibus ac facilisis in</s>
                                </MDBListGroupItem>
                              </MDBListGroup>
                            </MDBTabsPane>
                          </MDBTabsContent>
                        </MDBCardBody>
          <Box height={40} />
        </Box>
      </Box>
    </div>
  );
}
