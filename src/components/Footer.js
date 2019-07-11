import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import SocialIcons from './SocialIcons';

const FooterContainer = styled.div`
  width: 100%;
  padding: 40px 80px;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Footer = () => (
  <FooterContainer>
    <ColumnLeft>
      <Typography variant="body2" color="inherit">
        Code Garage 2019
      </Typography>
      <Typography variant="caption" color="inherit">
        Made with{' '}
        <span role="img" aria-label="hearth">
          ❤️
        </span>{' '}
        by Code Garage Team
      </Typography>
    </ColumnLeft>
    <SocialIcons />
  </FooterContainer>
);

export default Footer;
