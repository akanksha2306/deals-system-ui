import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

export default class Image extends Component {

 render(){

    console.log("Image PROPS=>", this.props);

  return( 
  <div className="product-image-container">
    <div className="product-image-background">

            <picture className="product-image" >

                <img src={this.props.source} alt={this.props.text} width="210px" height="250px" object-fit="fill"></img>

            </picture>

        </div>
    </div>
  )
 }
}

Image.propTypes = {
    source: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

const ImageComponent = styled.img`
	width: 100%;
	height: 100%;
`;