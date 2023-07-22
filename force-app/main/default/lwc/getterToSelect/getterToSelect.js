import { LightningElement } from 'lwc';

export default class GetterToSelect extends LightningElement {
    enteredValue = 'Enter some value' // default value

    handleClick(event){
        this.enteredValue = this.getValue;
        console.log(this.enteredValue); // prints Ash Basnyat
    }

    handleClickClear(event){        
        this.enteredValue = this.clearField; 
        console.log(this.enteredValue); // Prints ''

    }

    get clearField(){ 
        return ''; // return '' to blank this field
    }

    get getValue(){
        return 'Ash Basnyat'
    }
}