import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from 'shared/App';
import Login from 'shared/Login';

const Root = () => (
    <Router>
        <App/>
        {/* <div>
            <Route path="/" component={App} />
            <Route static path="/login/" component={Login} />
        </div> */}
    </Router>
);

export default Root;