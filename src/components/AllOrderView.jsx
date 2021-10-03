import React from "react";
import '../styles/AllStyles.css';
import OrderListHolder from "./OrderListHolder";


const AllOrderView = () => {

    return (
      <div>
          <div>
              <div>
                  <div className={"box"}>
                      <label className={"custom-underline"}>ORDERS</label>
                  </div>
              </div>
              <div id={"largeDiv"}>
                  <div id={'headingDiv'}>
                      <label id={'heading'}>Material</label>
                      <label id={'heading2'}>Budget</label>
                      <label id={'heading3'}>Seller</label>
                  </div>
                  <div id={'miniDiv'}>
                      <OrderListHolder leftLabel={"Hello"} middleLabel={"Hello1"} rightLabel={"Hello2"} onPress={() => console.log('div pressed')}/>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default AllOrderView;