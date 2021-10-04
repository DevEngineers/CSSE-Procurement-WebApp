import React, {useEffect, useState} from "react";
import '../styles/AllStyles.css';
import OrderService from "../services/OrderService";


const RequestQuotations = (props) => {
    const ID = props.match.params.id;
    const [material,setMaterial] = useState('');
    const [deadLine,setDeadLine] = useState('');
    const [estimatedCost,setEstimatedCost] = useState('');
    const [quantity,setQuantity] = useState('');
    const [description,setDescription] = useState('');
    const [site,setSite] = useState('');

    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = () =>{
        OrderService.getOrderByID(ID)
            .then(response =>{
                setMaterial(response.quantity);
                setDeadLine(response.deadLine);
                setEstimatedCost(response.estimatedCost);
                setQuantity(response.quantity);
                setDescription(response.description);
                setSite(response.site);
            }).catch((err) => {
            console.error(err);
        });
    }

    const sendQuotation = (event) =>{
        event.preventDefault()

        OrderService.declineOrder(ID)
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
                        <label className={"custom-underline"}>REQUEST QUOTATIONS</label>
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
                            <label>Estimated Cost</label>
                            <input type={'text'} value={quantity} onChange={event => setEstimatedCost(event.target.value)} required/>
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
                            <label>Description</label>
                            <input type={'text'} value={description} onChange={event => setDescription(event.target.value)} required/>
                        </div>
                    </div>
                    <div>
                        <input type={'submit'} value={'Cancel'} id={'btnCancel'}/>
                        <input type={'submit'} value={'Send'} id={'btnSub02'} onClick={event => sendQuotation(event)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestQuotations;
