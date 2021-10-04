import React, {useEffect, useState} from "react";
import '../styles/AllStyles.css';
import OrderService from "../services/OrderService";


const DeclineOrder = (props) => {
    const id = props.match.params.id;
    const [material,setMaterial] = useState('');
    const [deadLine,setDeadLine] = useState('');
    const [declineReason,setDeclineReason] = useState('');
    const [quantity,setQuantity] = useState('');
    const [declineDate,setDeclineDate] = useState('');
    const [site,setSite] = useState('');

    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = () =>{
        OrderService.getOrderByID(id)
        .then(response =>{
            setMaterial(response.quantity);
            setDeadLine(response.deadLine);
            setDeclineReason(response.deadLineReason);
            setQuantity(response.quantity);
            setDeclineDate(response.declineDate);
            setSite(response.site);
        }).catch((err) => {
            console.error(err);
        });
    }

    const declineOrder = (event) =>{
        event.preventDefault()

        OrderService.declineOrder(id)
        .then(response =>{
            if (response.status === 200) {
                console.log("Successfully order Declined");
                setTimeout(() => {
                    this.props.history.push("/");
                }, 3000);
            } else {
                throw Error("Something went wrong!! Try again.");
            }
        }).catch((err) => {
            console.error(err);
        });
    }

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
                          <input type={'text'} value={material} required={'required'} onChange={event => setMaterial(event.target.value)}/>
                      </div>
                      <div>
                          <label>Deadline</label>
                          <input type={'date'} value={deadLine} required onChange={event => setDeadLine(event.target.value)}/>
                      </div>
                      <div>
                          <label>Declining Reason</label>
                          <select value={declineReason} onChange={event => setDeclineReason(event.target.value)}>
                              <option value={''}>Select</option>
                          </select>
                      </div>
                  </div>
                  <div className={'form-style-resWork'}>
                      <div>
                          <label>Quantity</label>
                          <input type={'text'} value={quantity} onChange={event => setQuantity(event.target.value)} required/>
                      </div>
                      <div>
                          <label>Delivery Site</label>
                          <input type={'text'} value={site} onChange={event => setSite(event.target.value)} required/>
                      </div>
                      <div>
                          <label>Declining Date</label>
                          <input type={'date'} value={declineDate} onChange={event => setDeclineDate(event.target.value)} required/>
                      </div>
                  </div>
                  <div>
                      <input type={'submit'} value={'Cancel'} id={'btnCancel'}/>
                      <input type={'submit'} value={'Decline Order'} id={'btnSub'} onClick={event => declineOrder(event)}/>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default DeclineOrder;