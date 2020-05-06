import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <footer>
            <span style={{color: '#d2b48c', top: '1.5rem', left: '1rem', position: 'relative', textAlign: 'center'}}>
            &copy;{new Date().getFullYear()} All Rights Reserved
            </span>
        </footer>
    );
};

export default Footer;

const footer = styled.footer`
    background: #fff;
    height: 4rem;
    left: 0;
    bottom: 0;
    width: 100%
`;