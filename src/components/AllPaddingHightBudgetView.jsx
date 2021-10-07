import React, {useEffect, useState} from "react";
import '../styles/AllStyles.css';
import OrderService from "../services/OrderService";
import {useHistory} from "react-router-dom";

const AllPaddingHightBudgetView = () => {
    const history = useHistory();
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        console.log("fetchData");
        OrderService.getOrders()
            .then(orders =>{
                setOrders(orders);
                console.log("orders",orders);
            }).catch((err) => {
            console.error(err);
        });
    }

    const onPress = (order) => {
        let id = order.orderId;
        console.log('pressed orderId : ',id);
        history.push(`/quotation/${id}`);
    }

    return (
        <div>
            <div>
                <div>
                    <div className={"box"}>
                        <label className={"custom-underline"}> PANNING HIGH BUDGET ORDERS </label>
                    </div>
                </div>
                <div id={"largeDiv"}>
                    <div id={'headingDiv'}>
                        <label id={'heading'}>Material</label>
                        <label id={'heading2'}>Quantity</label>
                        <label id={'heading3'}>Budget</label>
                        <label id={'heading4'}>Order Status</label>
                    </div>
                    <div id={'miniDiv'}>
                        {orders.length > 0 ?
                            orders.map(order => {
                                return(
                                    <div onClick={() => onPress(order)} id={"viewMain"}>
                                        <div id={"viewDiv"}>
                                            <label id={'labelName'}>{order.item}</label>
                                            <label id={'labelName2'}>{order.quantity}</label>
                                            <label id={'labelName3'}>{order.totalCost}.00</label>
                                            <label id={'labelName4'}>{order.status}</label>
                                        </div>
                                    </div>
                                )})
                            : <div>No data found</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllPaddingHightBudgetView;
