
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar,Box, Toolbar, styled } from '@mui/material';

const StyledAppBar = styled(AppBar)`
    
    background-color: #333;
`;

const StyledContainer = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`;

const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
    transition: all 0.3s ease;

    &:hover {
        background-color: #555;
        border-radius: 5px;
    }
`;

const Header = () => {
    return (
        <StyledAppBar  >
            <StyledContainer >
                <div>
                    <StyledLink to='/'>HOME</StyledLink>
                    <StyledLink to='/about'>ABOUT</StyledLink>
                    <StyledLink to='/calendar'>CALENDAR</StyledLink>
                    <StyledLink to='/gallery'>GALLERY</StyledLink>
                </div>
                <StyledLink to='/login'>LOGOUT</StyledLink>
            </StyledContainer>
        </StyledAppBar>
    );
};

export default Header;
