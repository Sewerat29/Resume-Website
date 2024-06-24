import React from 'react';
import './link.css';

const Link = ({link, children }) => {
    return (
        <a className="link" href={link} target="_blank" rel='noreferrer'>
            {children}
        </a>
    );
};

export default Link;

