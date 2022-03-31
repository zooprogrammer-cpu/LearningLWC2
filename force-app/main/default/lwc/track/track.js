import { LightningElement,track } from 'lwc';

export default class Track extends LightningElement {
    address={
        city: 'Madison',
        state: 'WI',
        postalCode: 53718
    }
    trackHandler(event){
        this.address = {...this.address,"city":event.target.value}
    }
}

