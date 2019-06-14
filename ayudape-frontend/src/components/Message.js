import React, {Component } from 'react';
import PropTypes from 'prop-types';
import profile from '../images/Bot.png'
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  flex-direction:row;
  ${({sender}) => sender &&`
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: flex-start;
  `}
`;

const Content = styled.div`
  padding-top:10px;
  padding-left:10px;
  padding-right:10px;
`;

const MessageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    max-width: 100%;
    margin: 20px 10px;
    background: var(--main-color);
    color: var(--main-text-color);
    padding: 5px 5px;
    border-radius: 8px;
    ${({sender}) => sender &&`
      background: var(--secondary-color);
      flex-direction: row-reverse;
      align-items: flex-start;
      justify-content: flex-start;
    `}
`;


const Message = (props) => {
    return(
        <Wrapper sender={props.sender}>
            <MessageContainer sender={props.sender}>
            <img src={profile} alt="Profile Pic" height="40" width="40"/>
            <Content>{props.text ? props.text : <img src={props.source} alt={"Screenshot"}/>}</Content>
            </MessageContainer>
        </Wrapper>
    );
}


Message.propTypes = {
  text: PropTypes.string.isRequired,
    sender: PropTypes.bool.isRequired,
    source: PropTypes.string.isRequired
};

export default Message;
