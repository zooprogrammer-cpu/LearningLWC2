import { LightningElement } from 'lwc';

export default class TabbedApp extends LightningElement {

    handleOpenTabOne(){
        console.log('Tab One Clicked');
        let tabOne = this.template.querySelector('#tab-default-1-200');
        let tabTwo = this.template.querySelector('#tab-default-2-200');
        let tabThree = this.template.querySelector('#tab-default-3-200');
        tabOne.classList.replace('slds-hide', 'slds-show');
        tabTwo.classList.replace('slds-show', 'slds-hide');
        tabThree.classList.replace('slds-show', 'slds-hide');

    }

    handleOpenTabTwo(){
        console.log('Tab Two Clicked');
        let tabOne = this.template.querySelector('#tab-default-1-200');
        let tabTwo = this.template.querySelector('#tab-default-2-200');
        let tabThree = this.template.querySelector('#tab-default-3-200');
        tabOne.classList.replace('slds-show', 'slds-hide');
        tabTwo.classList.replace('slds-hide', 'slds-show');
        tabThree.classList.replace('slds-show', 'slds-hide');

    }

    handleOpenTabThree(){
        console.log('Tab Three Clicked');
        let tabOne = this.template.querySelector('#tab-default-1-200');
        let tabTwo = this.template.querySelector('#tab-default-2-200');
        let tabThree = this.template.querySelector('#tab-default-3-200');
        tabOne.classList.replace('slds-show', 'slds-hide');
        tabTwo.classList.replace('slds-show', 'slds-hide');
        tabThree.classList.replace('slds-hide', 'slds-show');

    }
}