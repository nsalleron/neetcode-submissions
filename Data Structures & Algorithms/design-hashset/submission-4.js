class ListNode {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class MyHashSet {
    constructor() {
        // Use a dummy head for each bucket to simplify insert/remove/contains
        this.bucketCount = 10000;
        this.set = Array.from({ length: this.bucketCount }, () => new ListNode(-1));
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const head = this.set[key % this.bucketCount];
        let current = head;
        while (current.next !== null) {
            if (current.next.key === key) {
                return; // already present
            }
            current = current.next;
        }
        current.next = new ListNode(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const head = this.set[key % this.bucketCount];
        let current = head;
        while (current.next !== null) {
            if (current.next.key === key) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const head = this.set[key % this.bucketCount];
        let current = head.next;
        while (current !== null) {
            if (current.key === key) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}