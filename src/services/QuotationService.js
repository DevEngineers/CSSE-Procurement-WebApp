const QUOTATION_API_BASE_URI = "http://localhost:8080/quotation";

class QuotationService{

    /**
     *  This service function is to Post Quotation backend
     */
    async addQuotation(quotation) {
        return await fetch(QUOTATION_API_BASE_URI + "/", {
            method: 'POST',
            headers:{
                'content-Type':"application/json",
            },
            body:JSON.stringify(quotation)
        }).then(response => {
            return response.json();
        }).catch(reason => {
            return reason;
        })
    }
}

export default new QuotationService();
