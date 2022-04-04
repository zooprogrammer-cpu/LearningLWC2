import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/refreshContactController.getContactList';
const columns = [
    { label: 'First Name', fieldName: 'FirstName',editable: true },
    { label: 'Last Name', fieldName: 'LastName', editable: true },
    { label: 'Email', fieldName: 'Email', type: 'email' }
];
export default class RefreshLwcDemo extends LightningElement {
    columns = columns;
    draftValues=[];
    @wire(getContactList)
    contact; 
    // get isContactAvailable(){
    //     console.log(JSON.stringify(this.contact))
    //     return this.contact && this.contact.data && this.contact.data.length>0? 'Yes':'No'

    // }

    handleSave(event){
        console.log(event.detail.draftValues)
    }
}