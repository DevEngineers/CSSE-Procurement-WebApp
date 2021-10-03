const ORDER_API_BASE_URI = "http://localhost:8080/researchPaper";

class OrderService{

    /**
     *  This service function is to Get All Research paper submission from backend
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
     *  This service function is to get the Research paper submission of specific user from backend
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
     *  This service function is to update stored Research paper submission in backend
     */
    async updateOrder(id,order){
        return await fetch(ORDER_API_BASE_URI+"/"+id,{
            method:'PUT',
            headers:{
                'content-Type':"application/json"
            },
            body:JSON.stringify(order)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

}

export default new OrderService();