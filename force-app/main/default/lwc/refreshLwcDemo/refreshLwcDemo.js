import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/refreshContactController.getContactList';
export default class RefreshLwcDemo extends LightningElement {
    @wire(getContactList)
    contact; 
    get isContactAvailable(){
        console.log(JSON.stringify(this.contact))
        return this.contact && this.contact.data && this.contact.data.length>0? 'Yes':'No'

    }
}