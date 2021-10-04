import React, {useEffect, useState} from "react";
import '../styles/AllStyles.css';
import OrderListHolder from "./OrderListHolder";
import OrderService from "../services/OrderService";

const AllPaddingHightBudgetView = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        OrderService.getOrders()
            .then(orders =>{
                setOrders(orders);
            }).catch((err) => {
            console.error(err);
        });
    }

    const onPress = () => {
        console.log('pressed')
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
                        <label id={'heading2'}>Budget</label>
                        <label id={'heading3'}>Order Status</label>
                        <label id={'heading4'}>Seller</label>
                    </div>
                    <div id={'miniDiv'}>
                        {
                            orders.map(order => {
                                return <OrderListHolder leftLabel={order.material} middleLabel1={order.budget}
                                                        middleLabel2={order.status} rightLabel={order.seller}
                                                        onPress={onPress}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllPaddingHightBudgetView;
