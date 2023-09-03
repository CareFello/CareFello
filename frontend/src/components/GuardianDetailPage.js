import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GuardianDetailsPage = () => {
    const { guardianId } = useParams();
    const [guardianDetails, setGuardianDetails] = useState(null);
    const [elderDetails, setElderDetails] = useState([]); // Initialize as an empty array


    useEffect(() => {
        console.log('Fetching details for guardianId:', guardianId);
        fetch(`http://localhost:8080/api/v1/guardian/${guardianId}/details`)
            .then(response => response.json())
            .then(data => {
                console.log('API response:', data);
                setGuardianDetails(data);
                setElderDetails(data.elders);
            })
            .catch(error => console.error('Error fetching guardian details:', error));
    }, [guardianId]);

    console.log('guardianDetails:', guardianDetails);


    return (
        <div>
            {guardianDetails ? (
                <div>
                    <h2>Guardian Details</h2>
                    <p>First Name: {guardianDetails.fname}</p>
                    <p>Last Name: {guardianDetails.lname}</p>
                    <p>Email: {guardianDetails.email}</p>
                    <p>NIC: {guardianDetails.nic}</p>
                    <p>Contact: {guardianDetails.cont}</p>
                    <p>Home Address: {guardianDetails.hAddress}</p>
                    <p>Work Address: {guardianDetails.wAddress}</p>
                    <p>Profession: {guardianDetails.profession}</p>
                    <h3>Elders</h3>
                    {guardianDetails.elders.length > 0 ? (
                        <ul>
                            {guardianDetails.elders.map(elder => (
                                <li key={elder.id}>
                                    Name: {elder.name}, Age: {elder.nic}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No elders registered.</p>
                    )}

                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default GuardianDetailsPage;

