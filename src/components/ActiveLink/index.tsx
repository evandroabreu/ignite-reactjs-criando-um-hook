import  { Link, LinkProps, useLocation } from 'react-router-dom';
import { ReactElement } from 'react';

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    activeClassName?: string;
}

const ActiveLink = ({children, activeClassName, ...rest} : ActiveLinkProps) => {
    const location  = useLocation();
    
    const className = location.pathname === rest.to ? activeClassName : '';

    return (
        <Link {...rest} className={className}>
            {children}
        </Link>
    )
}

export default ActiveLink;