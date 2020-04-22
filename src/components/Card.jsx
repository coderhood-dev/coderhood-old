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
    <SubTitle>{data.description}</SubTitle>
  </CardContainer>
);

const CardContainer = styled.div`
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
  transition: all 0.2s ease;
  background-color: #1b1f23;

  &:hover {
    bottom: 3px;
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

  ${CardContainer}:hover & {
    color: #6db23f;
  }
`;

const SubTitle = styled.p`
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
