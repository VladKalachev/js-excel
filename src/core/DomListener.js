import {capitalize} from './utils';

export default class DomListenet {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`No $root provided for DomListener`);
        }
        this.$root = $root;
        this.listeners = listeners;
    }

    initDOMLicteners() {
        this.listeners.forEach(listener => {
            this.$root.on(listener, () => {
                const metfod = getMethodName(listener);
                if (!this[metfod]){
                    throw new Error(`Method ${metfod} is not implemented 
                    in ${this.name || ''} Component`);
                }
                // console.log(metfod);
                this.$root.on(listener, this[metfod].bind(this))
            })
        })
    }

    removeDOMLicteners() {

    }
}

function getMethodName(eventName) {
    return 'on' + capitalize(eventName);
}
