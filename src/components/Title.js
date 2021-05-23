import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'


export default class Title extends React.Component {

 render(){
    console.log("Title PROPS=>", this.props);

  return( <Header>{this.props.title}</Header> )
 }
}

Title.propTypes = {
    title: PropTypes.string.isRequired
};

const Header = styled.h2`
    text-align: center;
    color: #000;
    margin: 0;
    font-family: monospace;
    font-size: 24px;
    line-height: 32px;
`;