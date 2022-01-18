import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ToastNotification extends LightningElement {
    toastHandler(){
        this.showToast("Success","Account Created","success")
    }

    toastHandlerError(){
       this.showToast("Error", "Cannot compute", "error")
    }

    toastHandlerWarn(){
        this.showToast("Warn", "Danger Will Robinson", "warning")
     }

     toastHandlerInfo(){
        this.showToast("Info", "Here is your information", "info")
     }

    showToast(title,message,variant){
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        })
        this.dispatchEvent(evt)
    }
}