import { LightningElement } from 'lwc';

export default class HelloQuerySelectorComponent extends LightningElement {
    fetchDetailHandler(){
        const elem=this.template.querySelector('h1')
        console.log(elem.innerText)

    }
}