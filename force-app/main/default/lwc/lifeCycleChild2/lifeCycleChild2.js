import { LightningElement } from 'lwc';

export default class LifeCycleChild2 extends LightningElement {
      //construcot rmethod gets called first
      constructor(){
        super()
        console.log('child constructor called')
    }

    //conenected callBack method gets called second
    interval
    connectedCallback(){
        console.log("child connectedCallback called")
       this.interval = window.setInterval()
    }

    //renderedCallback - slows down perfromance. fires more than once again and gain whenever something changes. Child to parent. 
    renderedCallback(){
        console.log("child renderedCallback called")
    }

    //used to for example remove setInterval since setInterval keeps running in the background
    disconnectedCallback(){
        alert('Child disconnectedCallback called!!')
        window.removeEventListener('click', this.handleClick)
        window.clearInterval(this.interval)
    }
}