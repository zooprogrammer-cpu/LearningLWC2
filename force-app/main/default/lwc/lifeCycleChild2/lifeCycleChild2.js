import { LightningElement } from 'lwc';

export default class LifeCycleChild2 extends LightningElement {
      //construcot rmethod gets called first
      constructor(){
        super()
        console.log('child constructor called')
    }

    //conenected callBack method gets called second
    connectedCallback(){
        console.log("child connectedCallback called")
    }

    //renderedCallback - slows down perfromance. fires more than once again and gain whenever something changes. Child to parent. 
    renderedCallback(){
        console.log("child renderedCallback called")
    }
}