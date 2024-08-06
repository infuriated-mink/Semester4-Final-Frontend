import React, { useState } from 'react';
import AddVenueForm from './AddVenueForm';

const AddButton = () => {
    const [showForm, setShowForm] = useState(false);

    const handleAddClick = () => {
        setShowForm(true);
    };

    return (
        <div>
            <button onClick={handleAddClick}>Add</button>
            {showForm && <AddVenueForm />}
        </div>
    );
};

export default AddButton;