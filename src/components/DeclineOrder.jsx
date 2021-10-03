import React from "react";
import '../styles/AllStyles.css';


const DeclineOrder = () => {

    return (
      <div>
          <div>
              <div>
                  <div className={"box"}>
                      <label className={"custom-underline"}>DECLINE ORDER</label>
                  </div>
              </div>
              <div id={'mainFormDiv'}>
                  <div className={'form-style-resWork'}>
                      <div>
                          <label>Material</label>
                          <input type={'text'} value={''} required={'required'}/>
                      </div>
                      <div>
                          <label>Deadline</label>
                          <input type={'date'} value={''} required/>
                      </div>
                      <div>
                          <label>Declining Reason</label>
                          <select>
                              <option>Select</option>
                          </select>
                      </div>
                  </div>
                  <div className={'form-style-resWork'}>
                      <div>
                          <label>Quantity</label>
                          <input type={'text'} value={''} required/>
                      </div>
                      <div>
                          <label>Delivery Site</label>
                          <input type={'text'} value={''} required/>
                      </div>
                      <div>
                          <label>Declining Date</label>
                          <input type={'date'} value={''} required/>
                      </div>
                  </div>
                  <div>
                      <input type={'submit'} value={'Cancel'} id={'btnCancel'}/>
                      <input type={'submit'} value={'Decline Order'} id={'btnSub'}/>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default DeclineOrder;