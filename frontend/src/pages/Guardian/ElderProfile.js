import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { Box, Container, TextField, Button, Typography, Avatar } from '@mui/material';
import { GuardianMenuItem } from '../../components/GuardianMenuItem';
import elder from "../../assets/guardian/elder1.jpeg";
import '../../styles/Guardian/ElderProfile.css';

function ElderProfile() {
  const [emergencyContacts, setEmergencyContacts] = useState([
    { id: 1, name: 'John Doe', relation: 'Son', contactNo: '0712343242' },
    { id: 2, name: 'Jane Smith', relation: 'Daughter', contactNo: '0717631824' },
  ]);

  const [profilePicture, setProfilePicture] = useState(elder);
  const [elderName, setElderName] = useState('Elder Name');

  const [medicalDetails, setMedicalDetails] = useState({
    medications: 'Medication A, Medication B',
    allergies: 'Pollen, Nuts',
    medicalHistory: 'Hypertension',
    doctors: 'Dr. Smith, Dr. Johnson',
  });

  const [personalDetails, setPersonalDetails] = useState({
    name: 'Elder Name',
    NIC: '123456789',
    dob: '01/01/1950',
    age: '73',
    guardianName: 'Guardian Name',
  });

  return (
    <div className="elder-profile-container">
      <Header />
      <Box height={80} />
      <Box sx={{ display: "flex" }}>
        <Sidebar menuItems={GuardianMenuItem} />
        <Container>
          <Typography className='page-topic' variant='h5'>Elder's Profile</Typography>
          <div className="profile-section">

            {/* Emergency Contact Details */}
            <div className="profile-subsection">
              <Typography variant="h6">Emergency Contact Details</Typography>
              {emergencyContacts.map(contact => (
                <div className="contact-item" key={contact.id}>
                  <TextField label="Name" defaultValue={contact.name} />
                  <TextField label="Relation" defaultValue={contact.relation} />
                  <TextField label="Contact No" defaultValue={contact.contactNo} />
                  <Button variant="contained" color="primary">Update</Button>
                </div>
              ))}
            </div>

            {/* Elder's Profile */}
            <div className="profile-subsection">
              <Avatar src={profilePicture} alt="Elder's Profile Picture" className="profile-picture" />
              <TextField label="Name" value={elderName} onChange={e => setElderName(e.target.value)} />
              <Button variant="contained" color="primary">Update</Button>
            </div>
          </div>

          <div className="profile-section">
            {/* Medical Details */}
            <div className="profile-subsection">
              <Typography variant="h6">Medical Details</Typography>
              <TextField label="Current Medications" defaultValue={medicalDetails.medications} />
              <TextField label="Allergies" defaultValue={medicalDetails.allergies} />
              <TextField label="Medical History" defaultValue={medicalDetails.medicalHistory} />
              <TextField label="Doctors" defaultValue={medicalDetails.doctors} />
              <Button variant="contained" color="primary">Update</Button>
            </div>

            {/* Personal Details */}
            <div className="profile-subsection">
              <Typography variant="h6">Personal Details</Typography>
              <TextField label="Name" value={personalDetails.name} onChange={e => setPersonalDetails({ ...personalDetails, name: e.target.value })} />
              <TextField label="NIC No" value={personalDetails.NIC} onChange={e => setPersonalDetails({ ...personalDetails, NIC: e.target.value })} />
              <TextField label="Date of Birth" value={personalDetails.dob} onChange={e => setPersonalDetails({ ...personalDetails, dob: e.target.value })} />
              <TextField label="Age" value={personalDetails.age} onChange={e => setPersonalDetails({ ...personalDetails, age: e.target.value })} />
              <TextField label="Guardian's Name" value={personalDetails.guardianName} onChange={e => setPersonalDetails({ ...personalDetails, guardianName: e.target.value })} />
              <Button variant="contained" color="primary">Update</Button>
            </div>
          </div>
        </Container>
      </Box>
    </div>
  );
}

export default ElderProfile;
