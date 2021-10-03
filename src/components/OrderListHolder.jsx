import React from "react";
import '../styles/AllStyles.css';

export default function OrderListHolder(props) {
    const {leftLabel, middleLabel, rightLabel,onPress} = props;
    return (
      <div onClick={onPress} style={{cursor:'pointer'}}>
          <div id={"viewMain"}>
              <div id={"viewDiv"}>
                      <label id={'labelName'}>{leftLabel}</label>
                      <label id={'labelName2'}>{middleLabel}</label>
                      <label id={'labelName3'}>{rightLabel}</label>
              </div>
          </div>
      </div>
    )
}