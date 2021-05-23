import "./DealTimer.css";
import React, { Component } from 'react';
import Countdown from 'react-countdown';
import PropTypes from 'prop-types'

export default class DealTimer extends Component {
  
 render(){

  console.log("DealCard PROPS=>", this.props);
  const DealExpiredMessage = () => <span>This deal has expired!</span>;

  return(
        <div>
            <span>
                {/* <span> */}
                    {/* <p className="product-deal-price ">Deal Expiring in :</p> */}
                {/* </span> */}
                <span className="deal-expiry-timer">
                    <Countdown date={new Date(this.props.expiry)} >
                        <DealExpiredMessage />
                    </Countdown>
                </span>
            </span>
        </div>
    )
 }
}

DealTimer.propTypes = {
    expiry: PropTypes.string.isRequired,
  };