import './ProductInfo.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types'


export default class ProductInfo extends React.Component {

 render(){
    console.log("ProductInfo PROPS=>", this.props);
    var deal = this.props.deal;

  return(
        <div>
                <h3 className="product-name"> {deal.product.name} </h3>

                <div className="product-price">
                    <span>
                        <span className="product-deal-price">
                            {"₹" + deal.dealPrice}
                        </span>
                        <span className="product-striked-price ">
                            {"₹" + deal.product.price}
                        </span>
                    </span>
                    <span className="product-discount">
                        {"(" + deal.discount + "% OFF)"}
                    </span>
                </div>
        </div>
    )
 }
}

ProductInfo.propTypes = {
    deal: PropTypes.object
};

