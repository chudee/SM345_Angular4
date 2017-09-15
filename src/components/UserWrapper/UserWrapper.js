import React from 'react';

const UserWrapper = ({children}) => {
    return (
        <div id="UserContainer" style={{ flex: 1 }}>
            {children}
        </div>
    );
};

export default UserWrapper;