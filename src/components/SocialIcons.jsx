import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SocialIcons = () => (
  <SocialIconsContainer>
    <IconButton target="_blank" href="https://github.com/emaLorenzo">
      <FontAwesomeIcon icon={faGithub} />
    </IconButton>
    <IconButton target="_blank" href="https://www.linkedin.com/in/emanuellorenzo">
      <FontAwesomeIcon icon={faLinkedin} />
    </IconButton>
    <IconButton target="_blank" href="http://instagram.com/aemalorenzo">
      <FontAwesomeIcon icon={faInstagram} />
    </IconButton>
    <IconButton target="_blank" href="https://www.facebook.com/aemalorenzo">
      <FontAwesomeIcon icon={faFacebook} />
    </IconButton>
  </SocialIconsContainer>
);

export default SocialIcons;
