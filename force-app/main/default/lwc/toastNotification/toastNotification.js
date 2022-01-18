import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ToastNotification extends LightningElement {
    toastHandler(){
        const evt = new ShowToastEvent({
            title: "Success",
            message:"Account Created",
            variant:"success"
        })
        this.dispatchEvent(evt)
    }

    toastHandlerError(){
        const evt = new ShowToastEvent({
            title: "Error",
            message: "Danger Will Robinson",
            variant: "error"
        })
        this.dispatchEvent(evt)
    }

    
}