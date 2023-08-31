import React from 'react'
import { useEffect, useState } from 'react'
import GuardianTable from '../components/GuardianTable';

function GuardianList() {
    const [guardianData, setGuardianData] = useState([]);

    useEffect(() => {
        // Fetch guardian data from your API endpoint and update state
        // Example fetch call:
        fetch('http://localhost:8080/api/v1/guardian/viewGuardianList')
            .then(response => response.json())
            .then(data => setGuardianData(data));
    }, []);

    return (
        <div>
            <h1>Guardian List</h1>
            <GuardianTable data={guardianData} />
        </div>
    )
}

export default GuardianList
