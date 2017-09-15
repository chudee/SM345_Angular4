import React from 'react';

const DashboardWrapper = ({ children }) => {
    return (
        <section id="DashboardContainer">
            {children}
        </section>
    );
};

export default DashboardWrapper;