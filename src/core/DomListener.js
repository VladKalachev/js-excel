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
                this[metfod] = this[metfod].bind(this);
                this.$root.on(listener, this[metfod]);
            })
        })
    }

    removeDOMLicteners() {
        this.listeners.forEach(listener => {
            const metfod = getMethodName(listener);
            this.$root.off(listener, this[metfod]);
        })
    }
}

function getMethodName(eventName) {
    return 'on' + capitalize(eventName);
}
