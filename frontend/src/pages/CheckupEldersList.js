// import React from "react";
// import Header from "../components/Header";
// import Box from "@mui/material/Box";
// import Sidebar from "../components/Sidebar";
// import { blueGrey } from "@mui/material/colors";
// import { DoctorMenuItem } from "../components/DoctorMenuItem";
// import { PieChart } from "@mui/x-charts/PieChart";
// import Grid from "@mui/material/Grid";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// function CheckupEldersList() {
//   return (
//     <div className="Elders">
//       <Header />
//       <Box height={80} />
//       <Box sx={{ display: "flex" }}>
//         <Sidebar menuItems={DoctorMenuItem} />

//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             justifyContent: "center",
//             alignItems: "center",
//             margin: 3,
//           }}
//         >
//           <Grid
//             container
//             spacing={3}
//             sx={{ justifyContent: "center", alignItems: "center" }}
//           ></Grid>
//           <Box height={40} />

//           <p sx={{ textalign: "left" }}>Assigned Elders</p>
//           <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
//             <div style={{ height: 400, width: "100%" }}>
//               <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 initialState={{
//                   pagination: {
//                     paginationModel: { page: 0, pageSize: 5 },
//                   },
//                 }}
//                 pageSizeOptions={[5, 10]}
//                 checkboxSelection
//               />
//             </div>
//           </div>
//         </Box>
//       </Box>
//     </div>
//   );
// }

// export default CheckupEldersList;
