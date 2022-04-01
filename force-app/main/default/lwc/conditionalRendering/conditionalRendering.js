import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible = false;
    handleClick(){
        console.log(`Button clicked`)
        //this.isVisible = true;
        this.isVisible =!this.isVisible;
    }
}