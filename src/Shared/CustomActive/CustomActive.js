import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


const CustomActive = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ borderBottom: match ? "4px solid white" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div>
    );
}

export default CustomActive;