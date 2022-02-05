import { LightningElement } from 'lwc';

export default class PdfGenerator extends LightningElement {
    imageURL='https://www.sparksuite.com/images/logo.png'
    invoiceData={
        invoiceNo: '1234',
        invoiceCreated: 'January 1, 2020',
        invoiceDue: 'January 31, 2020',
        companyName: 'Ash and Co',
        address1: '1234 High Road',
        address2: 'Madison, WI'
    }

    clientData={
        client:"Acme Corp",
        username:"John Doe",
        email:'john@example.com'
    }

    services=[
        {name:'Consultant fee', amount: 1000.00},
        {name:'Website design', amount: 300.00},
        {name:'Hosting (3 Months)', amount: 75.00},
    ]
    
    get totalAmount(){
        return this.services.reduce((total,service)=>{
            return total = total + service.amount
        },0) 
    }

    pdfHandler(){
        let content = this.template.querySelector('.container')
        console.log(content.outerHTML)
    }

}