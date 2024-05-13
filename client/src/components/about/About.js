import React from 'react';
import {Box,  styled}  from '@mui/material';

const PageContainer = styled(Box)`
    width: 100vw;
    height:100vh;
    margin: -20;
    background-size: 150%;
    background-position: center-top;
    margin-left: 20px;
    margin-top: 80px;
`;
const About = () => {
  return (
    <PageContainer>
      <h1 style={{ textAlign: 'left' ,marginTop: '75px', fontSize: '250%', color: '#1C1899' }}>About Us</h1>
      <p>Welcome to our MERN stack campus news website! We are dedicated to providing you with the latest news, events, and updates from our campus community.</p>
      <p>At our campus news website, you can:</p>
      <ul>
        <li>Read articles and news stories written by our student journalists</li>
        <li>Stay updated on upcoming events and activities on campus</li>
        <li>Participate in discussions and share your thoughts and opinions</li>
        <li>Contribute your own articles and stories to the website</li>
      </ul>
      <p>We are committed to providing a platform for our campus community to stay informed, engaged, and connected. Thank you for visiting our website!</p>
    </PageContainer>
  );
};

export default About;
