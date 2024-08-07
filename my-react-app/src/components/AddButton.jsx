import React, { useState } from 'react';
import AddEditEventForm from './AddEditEventForm';

const AddButton = () => {
    const [showForm, setShowForm] = useState(false);

    const handleAddClick = () => {
        setShowForm(true);
    };

    return (
        <div>
            <button onClick={handleAddClick}>Add</button>
            {showForm && <AddEditEventForm />}
        </div>
    );
};

export default AddButton;