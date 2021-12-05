import React from 'react';
import {
    Link,
} from 'react-router-dom';
import './style.scss';

const ButtonLink = props => {
    const { to, children, ...rest } = props;
    return <Link to={props.to} {...rest} className="btn btn-link">{children}</Link>
}

export default ButtonLink;
