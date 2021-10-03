import React from "react";
import '../styles/AllStyles.css';

export default function OrderListHolder(props) {
    const {leftLabel, middleLabel1, middleLabel2, rightLabel,onPress} = props;
    return (
      <div onClick={onPress} style={{cursor:'pointer'}}>
          <div id={"viewMain"}>
              <div id={"viewDiv"}>
                  <label id={'labelName'}>{leftLabel}</label>
                  <label id={'labelName2'}>{middleLabel1}</label>
                  <label id={'labelName3'}>{middleLabel2}</label>
                  <label id={'labelName4'}>{rightLabel}</label>
              </div>
          </div>
      </div>
    )
}