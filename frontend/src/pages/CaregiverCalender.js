import React from 'react';
import * as MUI from '@mui/material';
import Header from '../components/Header';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ManagerMenuItem } from "../components/ManagerMenuItem";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

export const StyleWrapper = styled.div`
  .fc-button.fc-prev-button, .fc-button.fc-next-button, .fc-button.fc-button-primary{
    background: red;
    background-image: none;
}
`
const CaregiverCalender = () => {
    const events = [
        {
            title:'Fasting from 8.00pm',
            date: '2023-11-05'
        },
        {
            title:'Blood test',
            date: '2023-11-05'
        },
        {
            title: 'Heart surgen Appointment',
            date: '2023-11-01'
        },
        {
            title: 'Pressure checkup',
            date: '2023-11-15'
        }
    ];

    const handleDateClick = (info) => {
        alert('Clicked on: ' + info.dateStr);
    };

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Box height={80} />
            <Header />
            <div className="sidbar-div">
                <Sidebar menuItems={ManagerMenuItem} />
            </div>
                <grid className="flex-grow" style={{ width: "80%", height: "80%", marginTop: "5%",marginLeft:"0.5%",marginRight:"1%" }}>
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        events={events}
                        dateClick={handleDateClick}
                        
                    />
                </grid>
            </div>
      
    );
};

export default CaregiverCalender;

//code for install fullcalendar
// npm install --save @fullcalendar/react @fullcalendar/daygrid @fullcalendar/interaction

