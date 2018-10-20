import React, { children } from 'react';
import './two-columns.css';
export const TwoColumns = ({ children }) => {
    return (
        <div className="grid-col-2">
            {children}
        </div>
    );
}

