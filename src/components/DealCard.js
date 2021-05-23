import React, { Component } from 'react';
import Image from './Image';
import ProductInfo from './ProductInfo';
import DealTimer from './DealTimer';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import PropTypes from 'prop-types'

export default class DealCard extends Component {
  

 render(){

  console.log("DealCard PROPS=>", this.props);
  const DealExpiredMessage = () => <span>This deal has expired!</span>;

  return(
        <div>
            {this.props.deals.map((deal, index) => {
              return (
                <Card 
                  key={index} 
                  /*href={deal.product.productImage}*/>
                    
                  <Image source={deal.product.productImage} text={deal.product.name} />
                  <ProductInfo deal={deal} />
                  <DealTimer expiry={deal.dealExpireTime} />

                  </Card> 
              )
          })}
         </div>
  )
 }
}

DealCard.propTypes = {
  deals: PropTypes.array.isRequired,
};

const Card = styled.a`
	max-width: 250px;
	width: 100%;
	display: inline-block;
	border-radius: 3px;
	text-decoration: none;
	color: #000;
	margin: 0 10px 15px;
    box-shadow: 7px 7px 50px -10px rgba(0, 0, 0, .5);
`;