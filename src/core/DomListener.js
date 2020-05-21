export default class DomListenet {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`No $root provided for DomListener`);
        }
        this.$root = $root;
        this.listeners = listeners;
    }

    initDOMLicteners() {
        console.log(this.listeners);
    }

    removeDOMLicteners() {

    }
}
