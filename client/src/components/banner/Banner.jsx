
import {Box, Typography, styled } from '@mui/material';


const Image =styled(Box)`
    background: url(https://xmple.com/wallpaper/solid-color-one-colour-single-plain-blue-3840x1644-c-050827-f-24.svg) center/55% repeat-x #000;
    width: 100%;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ` ;

const Heading =styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    font-family: Georgia;
    
    font-weight: 500;
    line-height: 1
    `;

const SubHeading = styled(Typography)`
    margin: 10px;
    font-size: 20px;
    color: #FFFFFF;
    background: #D62A24;
    `;
const Banner= () =>{
    return (
        <Image>
            <Heading> Campus chronicle </Heading>
            <SubHeading> Latest news</SubHeading>
        </Image>
    )
}

export default Banner;