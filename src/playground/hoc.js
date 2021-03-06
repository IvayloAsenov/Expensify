// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComoponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComoponent {...props}/>
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin ={true} info = 'These are the details'/>, document.getElementById('app'));