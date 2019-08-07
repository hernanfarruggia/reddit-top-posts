import React from 'react';

import './status.css';

const Status = (props) => {

    const getStatusProps = () => {
        const classes = ['status'];

        if (props.active) {
            classes.push('read');
        } else {
            classes.push('unread');
        }

        return {
            className: classes.join(' ')
        };
    }

    return (
        <div { ...getStatusProps() }></div>
    );
};

export default Status;