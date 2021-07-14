import React, { Component } from 'react';
import TeamA from './TeamA.jsx';
import TeamB from './TeamB.jsx';
import {Grid,Row,Col} from 'react-bootstrap';
import { StaticJsonRpcProvider, Web3Provider } from "@ethersproject/providers";

class Betting extends Component {
  constructor(){
    super();
    this.state = {
      web3 : '',
      address: '',
    };
  }

componentDidMount() {
    getWeb3.then(results => {
      /*After getting web3, we save the informations of the web3 user by
      editing the state variables of the component */
      results.web3.eth.getAccounts( (error,acc) => {
        //this.setState is used to edit the state variables
        this.setState({
          address: acc[0],
          web3: results.web3
        })
      });
    }).catch( () => {
      //If no web3 provider was found, log it in the console
      console.log('Error finding web3.')
    })
  }

render() {
    return (
      <div>
        <header className="App-header">
          <h1>Bet-eth</h1>
          </header>
          <div>
                    Welcome on my Ethereum Betting website <br/>
                  Your Wallet address is {this.state.address}
                  </div>
                  <Grid>
                            <Row>
                              <Col xs={6} sm={6}>A {/*We will import Team A component here */}</Col>
                              <Col xs={6} sm={6}>B {/*We will import Team B component here */}</Col>
                            </Row>
                          </Grid>

      </div>
    );
  }
}
export default Betting;