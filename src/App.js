//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

import DealCard from './components/DealCard';


import React, { Component } from 'react'

class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      deals: {}
    }
  }

  componentDidMount(){
    const URL = 'http://localhost:8080/api/v1/deal/active';
    axios.get(URL)
      .then(res => {
        const deals = res.data; //Taking just the required data
        if(typeof deals === 'object'){
          this.setState({ deals });// setting it to state of our app
        }
      })
      .catch(error => {
        console.log(error);
      });
}

render(){
    var data = this.state.deals;
    return(
      <AppContainer className= "App">
          {data.length > 0 && <DealCard deals={data} />}
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  background: #fff;
  padding: 2em;
  `;

export default App;
