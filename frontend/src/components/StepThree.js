// StepThree.js
import React from 'react';

function StepThree({ formData }) {
    return (
        <div>
            <h2>Confirm Your Information:</h2>
            <p>Guardian Name: {formData.guardianName}</p>
            <p>Elder Name: {formData.elderName}</p>
            {/* Display other fields from StepOne and StepTwo */}
        </div>
    );
}

export default StepThree;

// GuardianSendRequest.js
// ... (other imports)

import StepThree from '../../components/StepThree';

function GuardianSendRequest() {
    // ... (existing code)

    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed(true);
    };

    const handleDatabaseSubmit = () => {
        // Send formData to the database
        // Reset form data and other necessary states
        // Redirect or show a success message
    };

    // ... (existing code)

    return (
        <div>
            {/* ... (existing code) */}

            {currentStep === 3 && (
                <>
                    <StepThree formData={formData} />
                    <Button onClick={handlePrevStep}>Previous</Button>
                    {isConfirmed ? (
                        <Button onClick={handleDatabaseSubmit}>Submit</Button>
                    ) : (
                        <Button onClick={handleConfirm}>Confirm</Button>
                    )}
                </>
            )}

            {/* ... (existing code) */}
        </div>
    );
}
