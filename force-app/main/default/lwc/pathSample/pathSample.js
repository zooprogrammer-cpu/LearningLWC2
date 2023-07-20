import { LightningElement } from 'lwc';

export default class PathSample extends LightningElement {
    stageNames = [
        { label: 'Created', value: 'step-1', dataId: 'Created', className: '' },
        { label: 'Before Payment', value: 'step-2', dataId: 'Tech_Before_Payment', className: '' },
        { label: 'After Payment', value: 'step-3', dataId: 'Tech_After_Payment', className: '' }
    ]
    connectedCallback() {
        console.log('connectedCallback');
        // this.stageNames = this.STAGE_NAMES;
        this.stageNames.forEach(el => {
            console.log(el.label);
        });
        let currentStage = 'After Payment';
        this.setCurrentStage(currentStage);
    }

    setCurrentStage(currentStage) {
        let currentStageFound = false;
        for (let i = 0; i < this.stageNames.length; i++) {
            if (this.stageNames[i].label === currentStage) {
                currentStageFound = true;
                this.stageNames[i].className = 'slds-path__item slds-is-active slds-is-current';
            } else {
                this.stageNames[i].className = currentStageFound ? 'slds-path__item slds-is-incomplete' : 'slds-path__item slds-is-complete';
            }
        }
    }

}