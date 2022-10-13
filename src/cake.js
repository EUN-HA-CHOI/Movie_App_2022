import React, { Component } from 'react'

class Cake extends Component {

  state = {
    price : 30000,
    discountPrice: 0
  };

 sale = () => {
   console.log('할인가격')
   this.setState(current =>(
    {discoutPrice: current.price * 0.7 }
    ));
 }

  render() {
    return (
      <>
      <div>Cake </div>
        <h1>cake 가격 : {this.state.price}</h1>
        <h2>할인 가격 : {this.state.discountPrice}</h2>
        <button onClick={this.sale}>할인가격</button>
      </>
    )
  }
}
export default Cake;