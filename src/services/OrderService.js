const ORDER_API_BASE_URI = "http://localhost:8080/procurmentManager";

class OrderService{

    /**
     *  This service function is to Get get Orders backend
     */
    async getOrders(){
        return await fetch(ORDER_API_BASE_URI+"/",{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is to get the order by id from backend
     */
    async getOrderByID(id){
        return await fetch(ORDER_API_BASE_URI+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is to approve order
     */
    async approveOrder(id){
        return await fetch(ORDER_API_BASE_URI+"/approve/"+id,{
            method:'GET',
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to approve order
     */
    async declineOrder(id){
        return await fetch(ORDER_API_BASE_URI+"/decline/"+id,{
            method:'GET',
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

}

export default new OrderService();