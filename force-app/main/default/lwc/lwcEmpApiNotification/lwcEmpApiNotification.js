import { LightningElement, api, track } from 'lwc';
import { subscribe, unsubscribe, onError, setDebugFlag, isEmpEnabled } from 'lightning/empApi';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class LwcEmpApiNotification extends LightningElement {
    @track message = "";
    @track toastMessage;
    channelName = "/event/empApiEvent__e";
    isSubscribeDisabled = false;
    isUnsubscribeDisabled = !this.isSubscribeDisabled;
    subscription = {};

    // Tracks changes to channelName text field
    handleChannelName(event) {
        this.channelName = event.target.value;
    }

    // Initializes the component
    connectedCallback() {
        const self = this; 
        const toastCallback = function (response){
            console.log('message received: ', response.data.payload.message__c);
            self.message = response.data.payload.message__c;
            //this.toastMessage = response.data.payload.message__c; 
            //self.toastData = response['data']['payload'];
            //toastData = self.toastData; 
            console.log('self.message: ', self.message);
            if (self.message){
                self.showToast("Success",self.message,"success")
            }
        }
        
    
 
        //this.showToast("Success",this.message,"success")
        // if (self.message){
        //     const toastEvent = new ShowToastEvent({
        //         title : 'Success',
        //         message: 'yesssss',
        //         variant: 'success'
        //     });
        //     self.dispatchEvent(toastEvent);

        // }


        
        // Register error listener
        this.registerErrorListener();

        // Invoke subscribe method of empApi. Pass reference to messageCallback
        subscribe(this.channelName, -1, toastCallback).then((response) => {
            // Response contains the subscription information on subscribe call
            console.log(
                'Subscription request sent to: ',
                JSON.stringify(response.channel)
            );
            this.subscription = response;
            //c/bearLocationthis.toggleSubscribeButton(true);
        });
        onError(error => {
            console.log('Error in Platform Event Toast');
            console.log(error);
        });
    }

    // Handles subscribe button click
    // handleSubscribe() {
    //     // Callback invoked whenever a new event message is received
    //     const self = this; 
    //     const messageCallback = function (response) {
    //         //console.log('New message received: ', JSON.stringify(response.data));
    //         //this.message = response.data.payload.message__c; 
    //         console.log('message received: ', response.data.payload.message__c);
    //         self.message = response.data.payload.message__c;
    //         this.toastMessage = response.data.payload.message__c; 
    //         //toastHandler(self.message);

    //         // Response contains the payload of the new message received
    //     };

    // }

    // Handles unsubscribe button click
    handleUnsubscribe() {
        this.toggleSubscribeButton(false);

        // Invoke unsubscribe method of empApi
        unsubscribe(this.subscription, (response) => {
            console.log('unsubscribe() response: ', JSON.stringify(response));
            // Response is true for successful unsubscribe
        });
    }

    toggleSubscribeButton(enableSubscribe) {
        this.isSubscribeDisabled = enableSubscribe;
        this.isUnsubscribeDisabled = !enableSubscribe;
    }

    registerErrorListener() {
        // Invoke onError empApi method
        onError((error) => {
            console.log('Received error from server: ', JSON.stringify(error));
            // Error contains the server-side error
        });
    }

    toastHandler(){
        this.showToast("Success",this.message,"success")
    }

    showToast(title,message,variant){
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        })
        this.dispatchEvent(evt)
    }

    disconnectedCallback() {
        unsubscribe(this.subscription, response => {
            console.log('Un-Subscribed from Platform Event Toast');
            console.log(response);
        });
    }


}
