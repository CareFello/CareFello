// 'use client';
// import React from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import { Link } from 'react-router-dom';
// import Grid from '@mui/material/Grid';
// // import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import TextField from "@mui/material/TextField";
// import InputAdornment from "@mui/material/InputAdornment";
// import SearchIcon from "@mui/icons-material/Search";
// import PersonIcon from "@mui/icons-material/Person";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import { DoctorMenuItem } from '../components/DoctorMenuItem';
// import Box from '@mui/material/Box';
// import Img1 from '../assets/E4.jpg';
// import Img2 from '../assets/E5.jpg';
// import Img3 from '../assets/E3.jpg';

// import { Card } from 'flowbite-react';
// import '../styles/DoctorViewEldersList.css';



// const dataFromDatabase = [
//   {
//     id: 1,
//     Name: 'P. Perera',
//     Age: '55',
//     Guardian: 'Kamal Perera',
//     imageUrl: Img1,
//   },
//   {
//     id: 2,
//     Name: 'G.K Gunasekara',
//     Age: '76',
//     Guardian: 'Shehan Gunasekara',
//     imageUrl: Img2,
//   },
//   {
//     id: 3,
//     Name: 'M. Harishan',
//     Age: '65',
//     Guardian: 'Kishan Harishan',
//     imageUrl: Img3,
//   },
//   // Add more data items as needed
// ];


// const DoctorViewEldersList = () => {
//   return (
//     <div >
//       <Header />
//       <Box height={30} />

//       <Box className="elders-list-content" >
//         <Sidebar menuItems={DoctorMenuItem} />

//         <main className='dashboard__content'>
//           <h2>Elders</h2>


//           <Grid container >

//             {dataFromDatabase.map((elder) => (
//               <Grid className="elder-card" key={elder.id}>

//                 <Card className="card">
//                   {/* <img src={elder.imageUrl} alt={elder.title} style={cardImageStyle} /> */}
//                   <div className="flex flex-col items-center pb-8">
//                     <img 
//                       alt={elder.title}
//                       className="mt-4 mb-4 rounded-full shadow-lg"
//                       height="90"
//                       src={elder.imageUrl}
//                       width="90"
//                     />

//                     <h5 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">
//                       <a href={`/elder-profile/${elder.id}`} className="elder-name">
//                         {elder.Name}
//                       </a>
//                     </h5>

//                     <span className="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
//                       <span className="mr-1 material-icons"><AccessTimeIcon /></span>
//                       <span className="label">Age : </span>
//                       {elder.Age}
//                     </span>

//                     <span className="text-sm text-gray-500 dark:text-gray-400">
//                       <span className="mr-1 material-icons"><PersonIcon /></span>
//                       <span className="label">Guardian : </span>
//                       <a href={`/guardian-profile/${elder.id}`} className="guardianName-link">
//                         {elder.Guardian}
//                       </a>
//                     </span>

//                   </div>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </main>
//       </Box>
//     </div >

//   );
// };

// export default DoctorViewEldersList;