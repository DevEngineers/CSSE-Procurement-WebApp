import React from "react";
import '../styles/AllStyles.css';
import OrderListHolder from "./OrderListHolder";

const values =[
    {
        material:"sand",
        budget:1000,
        status:'pending',
        seller:'seller 1'
    },
    {
        material:"brick",
        budget:2000,
        status:'processing',
        seller:'seller 2'
    }
]


const AllOrderView = () => {

    const onPress = () => {
        console.log('pressed')
    }

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
                      <label id={'heading3'}>Order Status</label>
                      <label id={'heading4'}>Seller</label>
                  </div>
                  <div id={'miniDiv'}>
                      {
                          values.map(value =>{
                              return <OrderListHolder leftLabel={value.material} middleLabel1={value.budget} middleLabel2={value.status} rightLabel={value.seller} onPress={onPress}/>
                          })
                      }
                  </div>
              </div>
          </div>
      </div>
    )
}

export default AllOrderView;