import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
  border: none;
  background-color: ${props => props.theme.color};
  font-family: 'Caveat Brush', cursive;
  font-style: italic;
  letter-spacing: 2px;
  font-weight: 400;
  font-size: 1.4rem;
  color: white;
  border-radius: 18px;
  padding: 8px 15px;
  -webkit-appearance: none;
  margin: 1rem 0;
  text-align: right;
  &:hover {
    background-color: #4c4c49;
    color: #b5b5b5;
    transition: all 200ms linear;
  }
  @media screen and (max-width: 480px) {
    font-size: 90%;
    padding: 12px;
  }
`;

Btn.defaultProps = {
  theme: {
    color: '#ff914d', // orange
    // green: "#6ac66b",
    // blue: "#549bea"
  },
};

const Button = props => {
  return <Btn className={props.classType}>{props.buttonText}</Btn>;
};

export default Button;

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  classType: PropTypes.string,
  disabled: PropTypes.string,
  handleClick: PropTypes.func,
};
