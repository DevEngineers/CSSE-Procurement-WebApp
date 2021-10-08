import React, {useEffect, useState} from "react";
import '../styles/AllStyles.css';
import OrderService from "../services/OrderService";
import {toast, ToastContainer} from "material-react-toastify";
import QuotationService from "../services/QuotationService";
import {useHistory} from "react-router-dom";
import moment from 'moment';

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

//Toast Message Configuration
const options = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false
}

const RequestQuotations = (props) => {
    const ID = props.match.params.id;
    const history = useHistory();
    const quotationID = "Q02";
    const procurementManagerID = "PR02";
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
                setDeadLine(response.deadline);
                setEstimatedCost(response.totalCost);
                setQuantity(response.quantity);
                setDescription(response.description);
                setSite(response.deliverySite);
            }).catch((err) => {
            console.error(err);
        });
    }

    const sendQuotation = (event) =>{
        event.preventDefault();

        let Quotation = {
            quotationID:quotationID,
            procumentManagerID: procurementManagerID,
            orderID:ID,
            date: moment(Date().toLocaleString()).format("YYYY-MM-DD"),
            description:description,
            budget:" ",
            status:"padding"
        }

        QuotationService.addQuotation(Quotation)
            .then(res =>{
                console.log("response : ",res);
                if (res.status === 200) {
                    toast.success("Successfully Quotation Request Send");
                    console.log("Successfully Quotation Request Send");
                    setTimeout(() => {
                        history.push("/all");
                    }, 3000);
                } else {
                    toast.error( Error("Something went wrong!! Try again."));
                }
            }).catch((err) => {
            toast.error(err.message, options)
            console.error(err);
        });

    }

    return (
        <div>
            <ToastContainer/>
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
                            <input type={'text'} value={deadLine} required onChange={event => setDeadLine(event.target.value)}/>
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
