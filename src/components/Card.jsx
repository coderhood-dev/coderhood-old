import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = ({ data }) => (
  <CardContainer>
    <Img
      src="/static/reactIcon.svg"
      alt="img"
    />
    <Title>{data.name}</Title>
    <Description>{data.description}</Description>
  </CardContainer>
);

const CardContainer = styled.div`
  bottom: 0px;
  width: 235px;
  height: 312px;
  display: flex;
  padding: 40px;
  cursor: pointer;
  margin-left: 50px;
  border-radius: 5px;
  position: relative;
  align-items: center;
  flex-direction: column;
  border: 2px solid #2b2f33;
  background-color: #1b1f23;
  transition: all 0.3s ease;

  &:hover {
    bottom: 1px;
    background-color: #1f2327;
    border: 2px solid #6d7579;
    box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.2);
  };
`;

const Title = styled.p`
  margin: 0;
  color: #f2ecff;
  font-size: 25px;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  ${CardContainer}:hover & {
    color: #6db23f;
  }
`;

const Description = styled.p`
  color: #bbbcbe;
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
  margin-bottom: 60px;
`;

const Img = styled.img`
  height: 100px;
  margin-bottom: 18px;
`;

Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
