export default class DomListenet {
    constructor($root) {
        if (!$root) {
            throw new Error(`No $root provided for DomListener`);
        }
        this.$root = $root;
    }
}
