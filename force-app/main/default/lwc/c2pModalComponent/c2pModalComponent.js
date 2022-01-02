import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    closeHandler(){ 
        const myEvent = new CustomEvent('close',{
            detail:"Modal closed succesfully" 
        })
        this.dispatchEvent(myEvent)
    }
}