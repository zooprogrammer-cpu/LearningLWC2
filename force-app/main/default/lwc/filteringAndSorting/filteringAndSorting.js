import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList'
export default class FilteringAndSorting extends LightningElement {
    headings=["Id", "Name", "Title", "Email"]
    fullTableData = [] // store the data in thie empty array
    filteredData = []
    @wire(getContactList)
    contactHandler({data,error}){
        if (data){
            console.log(data)
            this.fullTableData = data
            this.filteredData = data
        }
        if (error){
            console.error(error)
        }
    }

}