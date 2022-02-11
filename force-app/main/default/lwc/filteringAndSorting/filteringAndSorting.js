import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList'
export default class FilteringAndSorting extends LightningElement {
    @wire(getContactList)
    contactHandler({data,error}){
        if (data){
            console.log(data)
        }
        if (error){
            console.error(error)
        }
    }

}