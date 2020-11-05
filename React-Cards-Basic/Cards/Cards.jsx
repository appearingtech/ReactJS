import React, { Component } from "react";
import Card from "./CardUI";
 
import img1 from "../assets/iot.jpg";
import img2 from "../assets/ai.jpg";
import img3 from "../assets/automation-autonomous-Sikov-stock.jpg";
 
class Cards extends Component {
  render() {
    return (
      <div className='container-fluid d-flex justify-content-center'>
        <div className='row'>
          <div className='col-md-4'>
            <Card imgsrc={img1} title='Internet of Things' />
          </div>
          <div className='col-md-4'>
            <Card imgsrc={img2} title='Artificial Intelligence' />
          </div>
          <div className='col-md-4'>
            <Card imgsrc={img3} title='Automation' />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
