import React from 'react';

const AdminWrapper = ({children}) => {
    return (
        <div id="AdminContainer">
            {children}
        </div>
    );
};

export default AdminWrapper;